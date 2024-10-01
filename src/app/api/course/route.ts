import { NextRequest, NextResponse } from "next/server";
import { auth,currentUser } from "@clerk/nextjs/server";
import prisma from "~/lib/client";
import { CourseSchema } from "~/types/courses";

export async function GET(request: NextRequest) {
  const { userId } = auth();
  const course_id = request.nextUrl.searchParams.get("course_id");

  if (!userId || !course_id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const course = await prisma.courses.findMany({
    where: {
      ...(course_id && { id: course_id }),
    },
    include: course_id
      ? {
          sections: {
            include: {
              videos: {
                include: {
                  resources: true,
                },
              },
            },
          },
        }
      : {},
  });

  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  return NextResponse.json({ course });
}

export async function POST(request: NextRequest) {
  const { userId } = auth();
  const user = await currentUser();
  const { data } = await request.json();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const course = CourseSchema.safeParse(data);
  if (!course.success) {
    return NextResponse.json({ error: course.error }, { status: 400 });
  }

  const courseData = course.data;

  const newCourse = await prisma.courses.create({
    data: {
      ...courseData,
      created_at: new Date(),
      author_id: userId,
      author_name: user?.fullName||"Unknown",
    },
  })

  if(!newCourse) {
    return NextResponse.json({ error: "Failed to create course" }, { status: 503 });
  }
  return NextResponse.json({ course: newCourse });
}


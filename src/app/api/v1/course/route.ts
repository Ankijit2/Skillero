import { NextRequest, NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import prisma from '~/lib/prisma-client';
import { CourseSchema } from '~/types/courses';

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const [createdCourses, paidCourses] = await Promise.all([
      prisma.courses.findMany({ where: { author_id: userId } }),
      prisma.purchasedDetails.findMany({ where: { user_id: userId } }),
    ]);

    return NextResponse.json({
      CreatedCourses: createdCourses,
      PaidCourses: paidCourses,
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses. Please try again later.' },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
  const safeUserId: string = userId!; // Non-null assertion
  
    const user = await currentUser();
    const data = await request.json();
    console.log(data)
  
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  
    const course = CourseSchema.safeParse(data);
    if (!course.success) {
      return NextResponse.json({ error: course.error }, { status: 400 });
    }
  
    const courseData = course.data;
  
    const newCourse = await prisma.courses.create({
      data: {
        name: courseData.name,
        description: courseData.description,
        price: courseData.price,
        created_at:new Date(),
        updated_at:new Date(),
        author_email:user?.emailAddresses[0]?.emailAddress || "anonymous",
        author_id: safeUserId,
        language: courseData.language,
        
        
      },
    });
  
    if (!newCourse) {
      return NextResponse.json(
        { error: 'Failed to create course' },
        { status: 503 }
      );
    }
    return NextResponse.json({ course: newCourse });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 503 });
  }
}

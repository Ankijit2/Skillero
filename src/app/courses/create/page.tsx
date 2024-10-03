"use client";


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import MultiInput from "~/components/multi-input";

const CourseSchema = z.object({
  name: z.string().min(1, { message: "Course name is required" }),
  description: z.string().min(1, { message: "Course description is required" }),
  price: z.number().min(1, { message: "Course price is required" }),
  // thumbnail: z.string().min(1, { message: "Course image is required" }),
  language: z.string().min(1, { message: "Course language is required" }),
  category: z.string().min(1, { message: "Course category is required" }),
  tags: z
    .array(z.string().min(1, { message: "Course tags cannot be empty" }))
    .min(1, { message: "Course tags is required" }),
  total_duration: z.string().min(1, { message: "Course duration is required" }),
});

export default function CourseForm() {
  //   const [uploading, setUploading] = useState(false)

  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema)
  });

  function onSubmit(values: z.infer<typeof CourseSchema>) {
    console.log(values);
    // Handle form submission here
  }


  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Create New Course</h2>
      </CardHeader>
      <CardBody>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Course Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter course name" {...field} />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        {...field} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          field.onChange(Number(e.target.value))
                        } 
                        value={field.value ? field.value.toString() : ""}
                        type="number"
                        placeholder="Enter price"
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>{" "}
                    {/* Display validation error */}
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter course description"
                      {...field}
                      className="min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail</FormLabel>
                  <FormControl>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <Input type="file" onChange={handleImageUpload} accept="image/*" className="w-full sm:w-auto" />
                      {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
                      {field.value && <img src={field.value} alt="Thumbnail" className="w-20 h-20 object-cover rounded mt-2 sm:mt-0" />}
                    </div>
                  </FormControl>
                  <FormDescription>Upload a thumbnail image for your course</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="language"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Language</FormLabel>
                    <FormControl>
                      <Input
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Enter course language"
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        placeholder="Enter course category"
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tags"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                  <MultiInput label="Tags" maxItems={5} value={field.value} onChange={field.onChange}/>
                  </FormControl>
                  
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="total_duration"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Total Duration</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter course duration (e.g., 2h 30m)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

            <Button type="submit" color="primary" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </CardBody>
    </Card>
  );
}

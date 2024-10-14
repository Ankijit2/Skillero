'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input, Textarea, Button } from '@nextui-org/react'
import MultiInput from '~/components/multi-input'
import { useState } from 'react'
import { useCreateCourse } from '../hooks/create-course'
import { CourseSchema } from '~/types/courses'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { createCourse } from '../hooks/create-course'
import toast from 'react-hot-toast'

export default function CourseForm() {
  const [open, setOpen] = useState(false)
  const {  mutate,isPending } = useCreateCourse()

  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
  })


  async function onSubmit(values: z.infer<typeof CourseSchema>) {
    mutate(values,{
      onSuccess: () => {
        toast.success('Course created successfully',{
          position:"bottom-right"
        })
        setOpen(false)
      },
      onError: (error) => {
        toast.error("Error creating course",{
          position:"bottom-right"
        })
      }
    })
   
    
  
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create new course</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create new course</DialogTitle>
          <DialogDescription>Fill in the details for your new course.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">Course Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter an inspiring title" className="text-lg" />
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
                    <FormLabel className="text-lg font-semibold">Price</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        placeholder="Set your course value"
                        className="text-lg"
                        startContent={<div className="pointer-events-none flex items-center pl-2">$</div>}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        value={field.value ? field.value.toString() : ''}
                      />
                    </FormControl>
                    <FormMessage>{fieldState.error?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Course Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Describe your course in vivid detail"
                      className=" text-lg"
                      minRows={6}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="language"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">Language</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Course language" className="text-lg" />
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
                  <FormLabel className="text-lg font-semibold">Tags</FormLabel>
                  <FormControl>
                    <MultiInput label="Add up to 5 tags" maxItems={5} value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage>{fieldState.error?.message}</FormMessage>
                </FormItem>
              )}
            />

          </form>
        </Form>
        <DialogFooter className="flex justify-between mt-6">
          <Button color="danger" className="basis-2/4" variant="bordered" onPress={() => setOpen(false)}>
            Cancel
          </Button>
          
            <Button
              color="primary"
              onPress={() => form.handleSubmit(onSubmit)()}
              disabled={isPending}
              className="w-full basis-2/4 bg-gradient-to-r from-purple-600 to-indigo-600 font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:from-purple-700 hover:to-indigo-700"
            >
              {isPending?'Creating...':'Create Course'}
            </Button>
         
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input, Textarea, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import MultiInput from '~/components/multi-input'
import { useState } from 'react'
import { motion } from 'framer-motion'
import CourseImageUploader from './dropzone'

const CourseSchema = z.object({
  name: z.string().min(1, { message: 'Course name is required' }),
  description: z.string().min(1, { message: 'Course description is required' }),
  price: z.number().min(1, { message: 'Course price is required' }),
  thumbnail: z.string().min(1, { message: 'Course image is required' }),
  language: z.string().min(1, { message: 'Course language is required' }),
  category: z.string().min(1, { message: 'Course category is required' }),
  tags: z.array(z.string().min(1, { message: 'Course tags cannot be empty' })).min(1, { message: 'Course tags is required' }),
  total_duration: z.string().min(1, { message: 'Course duration is required' }),
})

export default function CourseForm() {
  const [coverImage, setCoverImage] = useState<string | null>(null)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      thumbnail: '',
    },
  })

  function onSubmit(values: z.infer<typeof CourseSchema>) {
    console.log(values)
    // Handle form submission here
  }

  return (
    <>
      <Button  onPress={onOpen}>Create new course</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        backdrop="blur"
        size="3xl"
        
        className="max-h-[90vh] overflow-y-auto"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create new course</ModalHeader>
              <ModalBody>
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
                              className="min-h-[150px] text-lg"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="thumbnail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">Course Cover</FormLabel>
                          <FormControl>
                            <CourseImageUploader />
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

                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field, fieldState }) => (
                          <FormItem>
                            <FormLabel className="text-lg font-semibold">Category</FormLabel>
                            <FormControl>
                              <Input {...field} placeholder="Course category" className="text-lg" />
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

                    <FormField
                      control={form.control}
                      name="total_duration"
                      render={({ field, fieldState }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold">Total Duration</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g., 2h 30m" className="text-lg" />
                          </FormControl>
                          <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </ModalBody>
              <ModalFooter className='flex justify-between '>
                <Button color="danger" className=' basis-2/4' variant="bordered" onPress={onClose}>
                  Cancel
                </Button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='basis-2/4'
                >
                  <Button
                    color="primary"
                    onPress={() => form.handleSubmit(onSubmit)()}
                    className=" bg-gradient-to-r w-full from-purple-600 to-indigo-600   font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:from-purple-700 hover:to-indigo-700"
                  >
                   Create
                  </Button>
                </motion.div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
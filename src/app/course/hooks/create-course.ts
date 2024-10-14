import { apiClient } from "~/lib/api-client";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CourseSchema } from "~/types/courses";
import z from 'zod'
import { error } from "console";

export const createCourse=async(data:z.infer<typeof CourseSchema>)=> {
    
    const response = await apiClient.post('v1/course', data)
    return response.data
}

export function useCreateCourse() {
    const queryClient = useQueryClient();
   return useMutation({
    mutationFn:createCourse,
    mutationKey:['create-course'],
    onSuccess: () => {
        console.log('Course created successfully')
    },
    onError: (error) => {
        console.log('Error creating course',error)
    }
   })
   
}
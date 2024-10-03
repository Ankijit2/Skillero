'use client'

import React, { useState, useCallback } from 'react'
import { useDropzone, FileRejection } from 'react-dropzone'
import { Card, CardBody } from "@nextui-org/react"
import { Upload, X } from 'lucide-react'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'

export default function CourseImageUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  interface DropFile extends File {
    error?: string
  }

  const onDrop = useCallback((acceptedFiles: DropFile[], fileRejections: FileRejection[]) => {
    if (fileRejections.length > 0) {
      const rejectionError = fileRejections[0].errors[0]
      console.error('File Rejected:', rejectionError.message)
      toast.error(rejectionError.message)
      return
    }

    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0]
      setFile(uploadedFile)
      setPreview(URL.createObjectURL(uploadedFile))
      toast.success('File uploaded successfully!')
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
    maxSize: 1 * 1024 * 1024,
    disabled: !!file,
  })

  const removeImage = () => {
    setFile(null)
    setPreview(null)
    if (preview) URL.revokeObjectURL(preview)
    toast.success('Image removed')
  }

  return (
    <>
      <Card className="w-full max-w-md mx-auto">
        <CardBody className="p-0 overflow-hidden">
          <div
            {...getRootProps()}
            className={`relative w-full aspect-video flex items-center justify-center overflow-hidden rounded-lg transition-all duration-300 ease-in-out ${
              isDragActive && !file ? 'bg-primary/10' : file ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <input {...getInputProps()} />
            {file ? (
              <>
                <Image
                  src={preview!}
                  alt="Course cover"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold">Course Cover</p>
                </div>
                <div
               
                  className="absolute top-2 p-2 rounded-full right-2 z-10 bg-red-600"
                  onClick={removeImage}
                >
                  <X size={15} color='white' className=' font-bold'/>
                </div>
              </>
            ) : (
              <div className="text-center p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-lg font-semibold mb-2">Upload Course Cover</p>
                <p className="text-sm text-gray-500">
                  {isDragActive ? "Drop the image here ..." : "Drag 'n' drop an image here, or click to select"}
                </p>
                <p className="text-xs text-gray-400 mt-2">Max file size: 1MB</p>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
      <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
    </>
  )
}
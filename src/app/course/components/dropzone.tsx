'use client'

import React, { useState, useCallback } from 'react'
import { useDropzone, FileRejection } from 'react-dropzone'
import { Button, Card, CardBody } from "@nextui-org/react"
import { Upload, X } from 'lucide-react'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'
import { getPresignedUrl } from '../features/upload'
import axios from 'axios'

export default function CourseImageUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState<number | null>(null) 
  // State to track upload progress

  interface DropFile extends File {
    error?: string
  }

  const onDrop = useCallback(async (acceptedFiles: DropFile[], fileRejections: FileRejection[]) => {
    if (fileRejections.length > 0) {
      const rejectionError = fileRejections[0].errors[0];
      console.error('File Rejected:', rejectionError.message);
      toast.error(rejectionError.message);
      return;
    }

    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0];
      console.log('File Uploaded:', uploadedFile.name);
      setFile(uploadedFile);

      try {
        const presignedUrl = await getPresignedUrl(uploadedFile.name, uploadedFile.type);
        console.log('Presigned URL:', presignedUrl);

        // Ensure presignedUrl is valid before proceeding
        if (presignedUrl) {
          const options = {
            headers: {
              'Content-Type': uploadedFile.type,
            },
            onUploadProgress: (progressEvent: ProgressEvent) => {
              if (progressEvent.total) {
                const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setUploadProgress(progress); // Update the upload progress
              }
            },
          };

          // Upload the file to the presigned URL using a PUT request
          await axios.put(presignedUrl, uploadedFile, options);

          // Construct the CloudFront URL
          const cloudFrontUrl = `${process.env.PUBLIC_BASE_URL}/${uploadedFile.name}`;
          setPreview(cloudFrontUrl); // Set preview to CloudFront URL
          setUploadProgress(null); // Reset the progress once upload is complete
          toast.success('File uploaded successfully!');
        } else {
          console.error('Failed to get a valid presigned URL');
          toast.error('Failed to get a valid presigned URL');
        }
      } catch (error) {
        console.error('Error during file upload:', error);
        setUploadProgress(null); // Reset progress on error
        toast.error('Error uploading file. Please try again.');
      }
    }
  }, []);

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
            {preview ? (
              <>
                {uploadProgress !== null ? (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center">
                    <p className="text-white text-xl font-semibold mb-2">Uploading: {uploadProgress}%</p>
                    <div className="w-3/4 h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                ) : (
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
                      className="absolute top-2 p-2 rounded-full right-2 z-10 bg-red-600 cursor-pointer"
                      onClick={removeImage}
                    >
                      <X size={15} color='white' className='font-bold' />
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="text-center p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-lg font-semibold mb-2">Upload Course Cover</p>
                <p className="text-sm text-gray-500">
                  {isDragActive ? "Drop the image here ..." : "Drag 'n' drop an image here, or click to select"}
                </p>
                <div>or</div>
                <div className="mt-2 py-2 cursor-pointer text-xl text-white rounded-2xl bg-[#9333ea]">Browse files</div>
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

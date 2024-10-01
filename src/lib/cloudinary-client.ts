// utils/cloudinaryUpload.ts

export const uploadToCloudinary = async (file: File): Promise<string> => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'your_upload_preset') // Optional: Cloudinary upload preset
  
      const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      })
  
      if (!res.ok) {
        throw new Error('Cloudinary upload failed')
      }
  
      const data = await res.json()
      return data.secure_url // Return the URL of the uploaded image
    } catch (error: any) {
     console.error(error)
    }
  }
  
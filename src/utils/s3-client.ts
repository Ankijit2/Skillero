import { S3Client, PutObjectCommand,DeleteObjectCommand } from '@aws-sdk/client-s3';


export const s3client = new S3Client({
  region: 'ap-south-1',
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});




export const deleteObject = async (filename: string,BUCKET_NAME: string) => {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: filename,
  });
  await s3client.send(command);
};

"use server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3client } from "~/utils/s3-client";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const getPresignedUrl = async (filename: string,filetype:string) => {
  if (!filename || !filetype) return
  const command = new PutObjectCommand({
    Bucket: process.env.IMAGE_BUCKET,
    Key: filename,
    ContentType: filetype,
  });

  const signedUrl = await getSignedUrl(s3client, command, { expiresIn: 60 * 2 });

  return signedUrl;
  
};

import {S3Client,PutObjectCommand} from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";


export const s3client = new S3Client({ 
    region:"ap-south-1",
    credentials:{
        accessKeyId:process.env.Access_key_ID!,
        secretAccessKey: process.env.Secret_access_key!
    }
   
 });

 export const postObjects = async (filename:string,contentType:string)=>{
    const command = new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME!,
        Key: filename,
        ContentType: contentType
    })
    const signedUrl = await getSignedUrl(s3client, command, { expiresIn: 60 * 2 });
    return signedUrl;
 }
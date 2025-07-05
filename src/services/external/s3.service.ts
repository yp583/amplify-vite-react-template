import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
export const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
export const region = process.env.AWS_REGION;
export const bucket = process.env.AWS_S3_BUCKET;

if (!accessKeyId || !secretAccessKey || !region) {
  throw new Error("Missing AWS environment variables.");
}

const s3 = new S3Client({
  region: region,
  credentials: {
    accessKeyId: secretAccessKey,
    secretAccessKey: secretAccessKey,
  },
});

export const generateSignedUrl = async (key: string) => {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });

  const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

  return signedUrl;
};

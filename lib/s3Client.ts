import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";



/**
 * Initializes and returns an S3 client configured for Cloudflare R2
 * @returns {S3Client} Configured S3 client instance
 * @throws {Error} If required environment variables are not set
 */
export function initializeR2Client(): S3Client {
    const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
    const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
    const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;

    console.log(R2_ACCOUNT_ID,R2_ACCESS_KEY_ID,R2_SECRET_ACCESS_KEY)
  if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    throw new Error("R2 credentials are not defined in .env.local");
  }

  return new S3Client({
    region: "auto", // Required for Cloudflare R2
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: R2_ACCESS_KEY_ID,
      secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
  });
}

// Export a singleton instance of the R2 client
export const r2Client = initializeR2Client();

/**
 * Uploads a file to Cloudflare R2
 * @param {string} bucketName - The name of the R2 bucket
 * @param {string} key - The key (path) where the file will be stored in the bucket
 * @param {Buffer | Blob | ReadableStream} file - The file to upload
 * @param {string} contentType - The MIME type of the file
 * @returns {Promise<void>}
 */
export async function uploadFile(
  bucketName: string,
  key: string,
  file: Buffer | Blob | ReadableStream,
  contentType: string
): Promise<void> {
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: file,
    ContentType: contentType,
  });

  try {
     await r2Client.send(command);
  } catch (error) {
    console.error('Error uploading file to R2:', error);
    throw error;
  }
}

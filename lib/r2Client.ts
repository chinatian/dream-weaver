import { R2Bucket } from '@cloudflare/workers-types';

export class R2Client {
    private bucket: R2Bucket;

    constructor(bucket: R2Bucket) {
        this.bucket = bucket;
    }

    async uploadImage(imageBuffer: ArrayBuffer, key: string): Promise<string> {
        try {
            await this.bucket.put(key, imageBuffer, {
                httpMetadata: {
                    contentType: 'image/png',
                },
            });
            
            // Return the public URL of the uploaded image
            // Note: You'll need to configure R2 public access for this URL to work
            return `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`;
        } catch (error) {
            throw new Error(`Failed to upload image to R2: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    async getImage(key: string): Promise<ArrayBuffer | null> {
        try {
            const object = await this.bucket.get(key);
            if (!object) {
                return null;
            }
            return await object.arrayBuffer();
        } catch (error) {
            throw new Error(`Failed to get image from R2: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }

    async deleteImage(key: string): Promise<void> {
        try {
            await this.bucket.delete(key);
        } catch (error) {
            throw new Error(`Failed to delete image from R2: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
} 
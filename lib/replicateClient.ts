import Replicate from "replicate";
import { R2Client } from "./r2Client";
import {uploadFile} from "./s3Client"

export interface ImageGenerationInput {
    prompt: string;
    aspect_ratio?: string;
    safety_filter_level?: "block_medium_and_above" | "block_high" | "none";
}

export class ReplicateClient {
    private replicate: Replicate;
  

    constructor() {
        this.replicate = new Replicate({
            auth: process.env.REPLICATE_API_KEY,
        });
      
    }

    async generateImage(input: ImageGenerationInput, key: string): Promise<string> {
        try {
            const output = (await this.replicate.run("google/imagen-4", {
                input: {
                    prompt: input.prompt,
                    aspect_ratio: input.aspect_ratio || "16:9",
                    safety_filter_level: input.safety_filter_level || "block_medium_and_above"
                }
            }) as unknown) as string;

            // Fetch the image data from the URL provided by Replicate
            const response = await fetch(output);
            const arrayBuffer = await response.arrayBuffer();
            
            // Upload to R2 and return the public URL
            const bucketName = process.env.R2_BUCKET_NAME;
            if (!bucketName) {
                throw new Error('R2_BUCKET_NAME environment variable is not defined');
            }
            
            await uploadFile(
                bucketName,
                key,
                Buffer.from(arrayBuffer),
                'image/jpg'

            );
            return `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}${key}`
        } catch (error) {
            throw new Error(`Failed to generate image: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}

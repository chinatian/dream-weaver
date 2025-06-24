import Replicate from "replicate";
import {uploadFile} from "./s3Client"
import { CodeSquare } from "lucide-react";

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

    async generateImage(input: ImageGenerationInput, key: string, model: `${string}/${string}` | `${string}/${string}:${string}` = "google/imagen-4"): Promise<string> {
        try {
            let _input = {}
            if (model === "google/imagen-4") {
                _input = {
                    prompt: input.prompt,
                    aspect_ratio: input.aspect_ratio || "16:9",
                    safety_filter_level: input.safety_filter_level || "block_medium_and_above"
                }
            }
            if (model === "black-forest-labs/flux-1.1-pro") {
                _input = {
                    prompt: input.prompt,
                    aspect_ratio: input.aspect_ratio || "16:9",
                    output_format:'jpg'
                }
            }
            const output = await this.replicate.run(model, {
                input:_input
            });

            console.log("Generated image, uploading to R2...");

            // output 是一个 FileOutput 对象，需要获取其二进制数据
            if (!output) {
                throw new Error('No image data received from Replicate');
            }

            // 获取二进制数据 - 正确的方法
            const blob = await (output as any).blob();
            const arrayBuffer = await blob.arrayBuffer();
            const imageBuffer = Buffer.from(arrayBuffer);

            // Upload to R2 and return the public URL
            const bucketName = process.env.R2_BUCKET_NAME;
            console.log("bucketName", bucketName);
            if (!bucketName) {
                throw new Error('R2_BUCKET_NAME environment variable is not defined');
            }
            
            await uploadFile(
                bucketName,
                key,
                imageBuffer,
                'image/png'
            );
            
            console.log("generateImage", 'ok');
            return `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}${key}`
        } catch (error) {
            throw new Error(`Failed to generate image: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}

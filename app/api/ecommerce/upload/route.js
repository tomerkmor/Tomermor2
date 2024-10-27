import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    console.log(formData);
    const files = formData.getAll('images');

    if (!files || files.length === 0) {
      return new Response(JSON.stringify({ error: "No files provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log('Files to upload:', files);
    const uploadResults = [];

    for (const file of files) {
      console.log('Uploading file:', file.name);
      const buffer = await file.arrayBuffer();
      const fileName = `${Date.now()}-${file.name}`;

      const uploadParams = {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: Buffer.from(buffer),
        ContentType: file.type,
      };

      const upload = new Upload({
        client: s3Client,
        params: uploadParams,
      });

      console.log('Starting upload for:', fileName);
      const result = await upload.done();
      console.log('Upload successful:', result);

      uploadResults.push({
        fileName: fileName,
        s3Result: result,
      });
    }

    return new Response(
      JSON.stringify({
        message: "Files uploaded successfully",
        data: uploadResults,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error('Error during file upload:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

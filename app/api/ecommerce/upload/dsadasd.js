import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    // Parse the incoming form data
    const data = await req.formData();
    const files = data.getAll('images'); // Get all files with the key 'file'

    // Define the directory where files will be saved
    const uploadDir = path.join(process.cwd(), 'public/uploads');

    // Ensure the directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    // Save each file and create an array of file paths
    const uploadedFilePaths = [];

    for (const file of files) {
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      // Write the file to disk
      await fs.writeFile(filePath, fileBuffer);

      // Store the relative file path (to return to the client)
      uploadedFilePaths.push(`/uploads/${fileName}`);
    }

    // Return a response with the uploaded file paths
    return new Response(JSON.stringify({ links: uploadedFilePaths }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

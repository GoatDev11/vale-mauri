import { UploadApiResponse } from "cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: "dm96vwpw4",
  api_key: "494187799677675",
  api_secret: "qC6_tC6NqRwkhz8CEfcoiwS8zR8",
});

export async function POST(request: Request) {
  const data = await request.formData();
  const image = data.get("file");

  if (!image)
    return NextResponse.json("no se ha subido ninguna imagen", { status: 400 });

  if (image instanceof File) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const response = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (error, result) => {
          if (error) {
            reject(error);
          } else if (result) {
            resolve(result);
          } else {
            reject(new Error("Cloudinary upload failed"));
          }
        })
        .end(buffer);
    });

    console.log("respuesta de cloudinary", response);

    return NextResponse.json({
      message: "imagen subida",
      url: response.secure_url,
    });
  }
}

import { NextResponse } from "next/server"; 
import { writeFile} from "fs/promises"; 
import path from "path";
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dhzu0dhwr', 
  api_key: '214324762255413', 
  api_secret: 'EmO5CH8sbc6zWA-aPRE4_YQ2Sbs' 
});

export async function POST(request) {
const data = await request.formData();
const image = data.get("image");
if (!image) {
    return NextResponse.json("no se ha subido ninguna imagen", { status: 400 });
}

const bytes = await image.arrayBuffer();
const buffer = Buffer.from(bytes);

//const filePath = path.join(process.cwd(), "public", image.name); 
//await writeFile(filePath, buffer)

const response = await new Promise((resolve, reject)=>{
  cloudinary.uploader.upload_stream({}, (err, result)=>{
        if(err){
            reject(err)
        }
        resolve(result)
    }).end(buffer)
})

console.log(response)


 
return NextResponse.json({message: "imagen subida", url:response.secure_url});
}
"use client";
import React from "react";
import { Upload } from "lucide-react";

const fileupload = () => {
  const handleFileUploadButtonClick = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.click();
    el.addEventListener("change",async (ev) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);
        const formdata=new FormData()
        if (file) {
            formdata.append('pdf',file)
        }

        await fetch('http://localhost:8000/upload/pdf',{
          method:"post",
          body:formdata
        })

        console.log('file uploaded');
        
      }
    });
  };
  return (
    <div className="bg-slate-800 text-white shadow-2xl rounded-3xl p-4 w-full flex justify-center items-center">
      <div
        onClick={handleFileUploadButtonClick}
        className=" flex flex-col justify-center items-center "
      >
        <h2>Upload PDF File</h2>
        <Upload />
      </div>
    </div>
  );
};

export default fileupload;

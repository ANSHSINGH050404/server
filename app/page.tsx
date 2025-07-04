"use client"

import React from "react";
import { Upload } from "lucide-react";

const page = () => {

  const handleFileUploadButtonClick=()=>{
   const el=document.createElement('input');
   el.setAttribute('type','file');
   el.setAttribute('accept','application/pdf');;
   el.click();

  }
  return (
    <div className="min-h-full w-screen flex ">
      <div className="min-w-[30%] min-h-screen flex justify-center items-center">
      
        <div onClick={handleFileUploadButtonClick}className="bg-slate-900 shadow-2xl text-white p-4 rounded-3xl flex justify-center items-center gap-2">
            <h3>Upload pdf file</h3>
          <Upload />
        </div>
      </div>
      <div className="min-w-[70%] min-h-screen border-l-2">2</div>
    </div>
  );
};

export default page;

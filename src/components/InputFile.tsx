import { useState } from "react";
import * as XSLX from 'xlsx';

function InputFile({onFileSelect}: {onFileSelect: (file: File) => void}) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFile  = e.target.files?.[0];
    if (newFile ) {
        setFile(newFile);
        onFileSelect(newFile);
    }
  };
  return (
    <>
      <label
        className={`group flex flex-col justify-center w-1/2 h-40 border-2 border-gray-400 
                    rounded-lg cursor-pointer hover:border-green-600 focus:outline-green-200 transition
                    ${ file ? "bg-green-50 border border-green-600" : "bg-white border-dashed" } `}
      >
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className={`w-14 h-14 text-gray-600 group-hover:text-green-600 transition mb-2
                          ${file ? "text-green-600" : "text-gray-600"}`}
            fill="currentColor"
          >
            <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
          </svg>

          <p className="text-gray-600">
            {file ? file.name : "Haz clic o arrastra un archivo"}
          </p>
        </div>
        <input type="file" className="hidden" onChange={handleFileChange} accept=".csv, .xlsx, .xsl"/>
      </label>
    </>
  );
}

export default InputFile;

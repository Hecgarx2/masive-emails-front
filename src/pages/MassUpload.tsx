import { useState } from "react";
import InputFile from "../components/InputFile";
import { uploadFile } from "../services/uploadService";

function MassUpload() {
  const [file, setFile] = useState<File | null>(null);
  const handleFileSelect = () => {
    if (!file) {
      console.log("No file selected");
      return;
    }
    uploadFile(file);
  };
  return (
    <>
      <h3 className="text-3xl font-semibold text-heading p-6">
        Envio masivo de papeletas
      </h3>
      <InputFile onFileSelect={setFile} />
      <button
        onClick={handleFileSelect}
        type="button"
        className="inline-flex text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 
        focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 cursor-pointer mt-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
          className="mr-2"
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
        </svg>
        Enviar
      </button>
    </>
  );
}

export default MassUpload;

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputFile from "./components/InputFile";

function App() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) setFile(file);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-col items-center mb-6 flex-1">
          <h3 className="text-3xl font-semibold text-heading p-6">Envio masivo de papeletas</h3>
          <InputFile />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

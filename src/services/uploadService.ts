import axios from "axios";

export async function uploadFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  try {
    axios
      .post("http://localhost:5000/send-email", formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // const response = await fetch("http://localhost:5000/send-email", {
    //   method: "POST",
    //   body: formData,
    // });

    // const data = await response.json();
    // console.log("Excel procesado:", data);
  } catch (error) {
    console.error("Error al subir:", error);
  }
}

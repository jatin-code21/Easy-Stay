import axios from "axios";
// import dotenv from "dotenv";
// require("dotenv").config();

const apiClient = axios.create({
  baseURL: `http://localhost:4000`, // Server url goes here
});

export async function getSignedUrl({ key, content_type }) {
  const response = await apiClient.post("/upload", {
    key,
    content_type,
  });

  return response.data;
}

export async function uploadFileToSignedUrl(
  signedUrl,
  file,
  contentType,
  onProgress,
  onComplete
) {
  axios
    .put(signedUrl, file, {
      onUploadProgress: onProgress,
      headers: {
        "Content-Type": contentType,
      },
    })
    .then((response) => {
      onComplete(response);
    })
    .catch((err) => {
      console.error(err.response);
    });
}
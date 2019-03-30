import axios from "axios";

const onGlobalSuccess = response => {
  return response.data;
};

const onGlobalError = error => {
  return Promise.reject(error);
};

const uploadImage = files => {
  let data = new FormData();
  for (let i = 0; i < files.length; i++) {
    data.append("files", files[i]);
  }
  const config = {
    method: "POST",
    url: "/api/posts/upload",
    data: data,
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const getAllImages = () => {
  const config = {
    method: "GET",
    url: "/api/images",
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

export { uploadImage, getAllImages };

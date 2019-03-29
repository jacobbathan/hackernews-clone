import axios from "axios";

const onGlobalSuccess = response => {
  return response.data;
};

const onGlobalError = error => {
  return Promise.reject(error);
};

const uploadImage = file => {
  // let data = new FormData();
  // data.append("file", file);
  const config = {
    method: "POST",
    url: "/api/posts/upload",
    payload: file,
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

export { uploadImage };

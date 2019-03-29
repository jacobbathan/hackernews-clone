import axios from "axios";

const onGlobalSuccess = response => {
  return response.data;
};

const onGlobalError = error => {
  return Promise.reject(error);
};

const uploadImage = image => {
  const config = {
    method: "POST",
    url: "/api/posts/upload",
    payload: image,
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

export { uploadImage };

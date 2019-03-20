import axios from "axios";

const onGlobalSuccess = response => {
  return response.data;
};

const onGlobalError = err => {
  return Promise.reject(err);
};

const getAllPosts = () => {
  const config = {
    method: "GET",
    url: "/api/posts",
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const getPostById = id => {
  const config = {
    method: "GET",
    url: `/api/posts/${id}`,
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const insertPost = payload => {
  const config = {
    method: "POST",
    url: "/api/posts",
    data: payload,
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const updatePost = (payload, id) => {
  const config = {
    method: "PUT",
    url: `/api/posts/${id}`,
    data: payload,
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const deletePost = id => {
  const config = {
    method: "DELETE",
    url: `/api/posts/${id}`,
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

export { getAllPosts, getPostById, insertPost, updatePost, deletePost };

import axios from "axios";

const onGlobalSuccess = response => {
  return response.data;
};

const onGlobalError = error => {
  return Promise.reject(error);
};

const scrapeWeb = () => {
  const config = {
    method: "GET",
    url: "api/posts/webscrape",
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

const getWebScrape = () => {
  const config = {
    method: "GET",
    url: "api/posts/webscrape/getall",
    crossdomain: "true",
    headers: { "Content-Type": "application/json" }
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

export { scrapeWeb, getWebScrape };

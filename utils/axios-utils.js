import axios from "axios";

const client = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const axiosRequest = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;

  const onSuccess =  (response) => response;
  const onError = (err) => {
    return err;
  };
  return await client(options).then(onSuccess).catch(onError);
};

import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { axiosRequest } from "../utils/axios-utils";
const fetchUser = () =>
  axiosRequest({ url: "/users", method: "GET" }).then((res) => res.data);
const singleUser = (userId) => axiosRequest({ url: `/users/${userId}` });

const CreateUserApi = (userId) => axiosRequest({ url: `/posts` });

export function useUsers() {
  return useQuery("users", fetchUser, {
    staleTime: 50000,
  });
}

export const useUser = (userId) => {
  return useQuery(["user", userId], () => singleUser(userId), {
    cacheTime: 5000,
  });
};

export const useCreateUser = (user) => {
  const queryClient = useQueryClient();
  return useMutation((user) => CreateUserApi(user), {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });
};
export const useUpdateUser = (user) => {
  const queryClient = useQueryClient();

  return useMutation((user) => CreateUserApi(user), {
    onSuccess: (data) => queryClient.setQueryData(["users", 10], data),
  });
};

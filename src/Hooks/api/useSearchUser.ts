// // hooks/useSearchUser.ts
// import { useMutation } from "@tanstack/react-query";
// import api from "../../services/apiConfig";

// type UserSearchResponse = {
//   success: boolean;
//   data: any; // adjust to actual response type if needed
// };

// export const searchUser = async (username: string): Promise<UserSearchResponse> => {
//   const response = await api.post(`/user/${username}`);
//   return response.data;
// };

// export const useSearchUser = () => {
//   return useMutation({
//     mutationFn: searchUser,
//   });
// };
import { useMutation } from "@tanstack/react-query";
import api from "../../services/apiConfig";

type UserSearchResponse = {
  success: boolean;
  data: any; // Adjust to the actual response type if needed
};

export const searchUser = async (username: string): Promise<UserSearchResponse> => {
  const response = await api.post(`/create`, { username });  // Send the username as part of the body
  return response.data;
};

export const useSearchUser = () => {
  return useMutation({
    mutationFn: searchUser,
  });
};

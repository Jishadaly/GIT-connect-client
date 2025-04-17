import { useMutation } from "@tanstack/react-query";
import api from "../../services/apiConfig";


export const searchUser = async (username: string): Promise<any> => {
  const response = await api.post(`/create`, { username });  // Send the username as part of the body
  return response
};

export const useSearchUser = () => {
  return useMutation({
    mutationFn: searchUser,
  });
};

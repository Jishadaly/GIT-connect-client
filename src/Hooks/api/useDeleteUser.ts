// hooks/api/useDeleteUser.ts
import { useMutation, useQueryClient } from "@tanstack/react-query"
import api from "../../services/apiConfig"

const deleteUser = async (userId: string) => {
  const { data } = await api.patch(`/soft-delete/${userId}`) // Make sure your backend route matches this
  return data
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["explorer-users"] }) // Refetch users
    },
  })
}

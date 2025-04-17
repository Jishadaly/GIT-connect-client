// hooks/useExplorer.ts
import { useQuery } from "@tanstack/react-query"
import api from "../../services/apiConfig"
import { GitHubUser } from "../../types"


const fetchUsers = async (): Promise<GitHubUser[]> => {
  const { data } = await api.get("/") // Update URL if needed
  return data.users
}

export const useExplorer = () => {
    const {
      data,     // The fetched data (users)
      isLoading, // Loading state
      error,     // Any error that might occur
      refetch
    } = useQuery<GitHubUser[], Error>({
      queryKey: ["explorer-users"],
      queryFn: fetchUsers,
      staleTime: 1000 * 60 * 5, // cache for 5 minutes
    })
  
    return { users:data, isLoading, error ,refetchUsers:refetch}
  }

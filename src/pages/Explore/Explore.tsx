import React, { useState } from "react"
import DeleteConfirmation from "../../components/modalBase/deleteModal/DeleteConfirmation"
import "./explore.css"
import PrimaryButton from "../../components/button/PrimaryBtn"
import { useNavigate } from "react-router-dom"
import { GitHubUser } from "../../types"
import { useExplorer } from "../../Hooks/api/useExplore"
import Loader from "../../components/loader/Loader"
import { useDeleteUser } from "../../Hooks/api/useDeleteUser"


const ExploreUsersPage: React.FC = () => {
  const { users, isLoading, error } = useExplorer()
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser()
  const [selectedUser, setSelectedUser] = useState<GitHubUser | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const navigate = useNavigate()

  console.log(users, "ff")


  const openDeleteModal = (user: any) => {
    setSelectedUser(user)
    setShowModal(true)
  }

  const handleDeleteUser = () => {
    if (selectedUser) {
      deleteUser(selectedUser._id,{
        onSuccess:()=>{
          setShowModal(false)
          setSelectedUser(null)
        },
        onError:(error)=>{
         alert("Error deleting user")
         console.log("Error deleting user:" , error.message)
        }
      })
    }
  }

  if (isLoading) {
    return <Loader message="loading users.." />
  }

  if (error) {
    return <div>Error occurd durung fetching users</div>
  }

  if (isDeleting) {
    return <Loader message="Deleting user..." />
  }




return (
  <div className="explore-users">
    <div className="explore-header">
      <h2 className="explore-title">Explore GitHub Users</h2>
      <PrimaryButton text="back" styleProps={{ height: "40px", textAlign: "center", background: "#cccccc", cursor: "pointer" }} onClick={() => navigate(-1)} />
    </div>
    {isLoading ? (
      <div className="loading">Loading users...</div>
    ) : users && users.length <= 0 ? ( 
       <div className="no-users">No users found. </div>
     ) : (
    
      <div className="user-grid">
        {users?.map((user: any) => (
          <div key={user._id} className="user-card">
            <img src={user.avatar} alt={`${user.login}'s avatar`} className="user-avatar" />
            <div className="user-info">
              <h3 className="user-login">{user.login}</h3>
              <p className="user-type">{user.type}</p>
            </div>
            <button className="delete-button" onClick={() => openDeleteModal(user)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    )}
    <DeleteConfirmation
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      onConfirm={handleDeleteUser}
      user={selectedUser}
    />
  </div>
)
}

export default ExploreUsersPage



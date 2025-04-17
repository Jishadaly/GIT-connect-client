import React from "react"
import Modal from "../ModalBase"
import "./DeleteConfirmation.css"
import { GitHubUser } from "../../../types"



interface DeleteConfirmationProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  user: GitHubUser | null
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  onClose,
  onConfirm,
  user,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="delete-modal">
        <h3 className="delete-title">Confirm Deletion</h3>
        <p className="delete-message">
          Are you sure you want to delete <strong>{user?.login}</strong>?
        </p>
        <div className="delete-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteConfirmation

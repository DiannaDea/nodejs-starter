import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteUserModal = ({show, hideModal, curUser, handleUserDelete}) => {
  return (
    <div>
      <Modal isOpen={show} toggle={hideModal}>
        <ModalHeader toggle={hideModal}>Delete user</ModalHeader>
        <ModalBody>
          Are you sure to delete user: {(curUser) ? curUser.fullName : ''} ?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={hideModal}>Cancel</Button>
          <Button color="danger" onClick={handleUserDelete}>Delete</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default DeleteUserModal
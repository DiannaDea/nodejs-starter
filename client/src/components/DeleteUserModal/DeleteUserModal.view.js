import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteUserModal = ({show, hideModal, curUser}) => {
  return (
    <div>
      <Modal isOpen={show} toggle={hideModal}>
        <ModalHeader toggle={hideModal}>Modal title</ModalHeader>
        <ModalBody>
          {(curUser) ? curUser.fullName : ''}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={hideModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={hideModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default DeleteUserModal
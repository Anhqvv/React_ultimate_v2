import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { deleteUser } from '../../../services/apiServices'
import { toast } from 'react-toastify'

function ModalDeleteUser (props) {
  const {
    show,
    handleClose,
    dataDelete,
    fetchAllUserWithPaginate,
    setCurentPage
  } = props
  const handleCloseModal = () => {
    handleClose()
  }

  const handleSubmitDeleteUser = async () => {
    const id = dataDelete.id
    if (id) {
      const data = await deleteUser(id)

      if (data && data.EC === 0) {
        toast.success(data.EM)
      }
      if (data && data.EC !== 0) {
        toast.error(data.EM)
      }
      handleCloseModal()
      setCurentPage(1)
      await fetchAllUserWithPaginate(1)
    }
  }

  return (
    <>
      <Modal
        centered
        size='xl'
        show={show}
        onHide={handleCloseModal}
        backdrop='static'
        keyboard={false}
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure delete {''}
          <b>
            this email ={dataDelete && dataDelete.email ? dataDelete.email : ''}
            ?
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary'>Cancel</Button>
          <Button variant='primary' onClick={() => handleSubmitDeleteUser()}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalDeleteUser

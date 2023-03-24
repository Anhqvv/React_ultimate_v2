import React, { useState } from 'react'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FcPlus } from 'react-icons/fc'
import { toast } from 'react-toastify'
import _ from 'lodash'
import { putUpdateUser } from '../../../services/apiServices'

function ModalUpdateUser (props) {
  const { show, handleClose, fetchAllUser, dataUpdate, resetDataUpdate } = props
  const handleCloseModal = () => {
    handleClose()
    setEmail('')
    setPassword('')
    setUsername('')
    setImage('')
    setRole('USER')
    setPreviewImage('')
    resetDataUpdate()
  }
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email)
      setUsername(dataUpdate.username)
      setRole(dataUpdate.role)
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`)
      }
    }
  }, [dataUpdate])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [role, setRole] = useState('USER' || 'ADMIN')
  const [previewImage, setPreviewImage] = useState('')

  const handleUploadImage = e => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
      setImage(e.target.files[0])
    }
  }

  const handleUpdateUser = async () => {
    let id = dataUpdate.id
    if (id) {
      let data = await putUpdateUser(id, username, role, image)
      if (data && data.EC === 0) {
        toast.success(data.EM)
      }
      if (data && data.EC !== 0) {
        toast.error(data.EM)
      }
      fetchAllUser()
      handleCloseModal()
      console.log('my data update', data)
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
          <Modal.Title>Update a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='row g-3'>
            <div className='col-md-6'>
              <label className='form-label'>Email</label>
              <input
                type='email'
                className='form-control'
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Password</label>
              <input
                type='password'
                className='form-control'
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled
              />
            </div>
            <div className='col-6'>
              <label className='form-label'>Username</label>
              <input
                type='text'
                className='form-control'
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className='col-6'>
              <label className='form-label'>Role</label>
              <select
                className='form-select'
                onChange={e => setRole(e.target.value)}
                value={role}
              >
                <option value='USER'>USER</option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </div>
            <div className='col-12'>
              <label
                className='form-label label-upload'
                htmlFor='labelUpload'
                value={image}
              >
                <FcPlus />
                Upload File Image
              </label>
              <input
                type='file'
                hidden
                id='labelUpload'
                onChange={e => handleUploadImage(e)}
              />
            </div>
            <div className='col-md-12 img-preview'>
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleUpdateUser}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalUpdateUser

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FcPlus } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { postCreateNewUser } from '../../../services/apiServices'

function ModalCreateUser (props) {
  const { show, handleClose, fetchAllUser } = props
  const handleCloseModal = () => {
    handleClose()
    setEmail('')
    setPassword('')
    setUsername('')
    setImage('')
    setRole('')
    setPreviewImage('')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [role, setRole] = useState('USER')
  const [previewImage, setPreviewImage] = useState('')

  const handleUploadImage = e => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]))
      setImage(e.target.files[0])
    }
  }

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }
  const handleSubmitCreateUser = async () => {
    //validate
    const isValidate = validateEmail(email)
    if (!isValidate) {
      toast.error('invalid email')
      return
    }
    if (!password) {
      toast.error('invalid password')
      return
    }

    let data = await postCreateNewUser(email, password, username, role, image)
    if (data && data.EC === 0) {
      toast.success(data.EM)
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
    handleCloseModal()
    await fetchAllUser()
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
          <Modal.Title>Add new user</Modal.Title>
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
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>Password</label>
              <input
                type='password'
                className='form-control'
                value={password}
                onChange={e => setPassword(e.target.value)}
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
                <option selected value='USER'>
                  USER
                </option>
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
          <Button variant='primary' onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCreateUser

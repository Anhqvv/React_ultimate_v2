import React, { useState } from 'react'
import { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { FcPlus } from 'react-icons/fc'
import _ from 'lodash'

function ModalViewUser (props) {
  const { show, handleClose, dataView, resetDataView } = props
  const handleCloseModal = () => {
    handleClose()
    setEmail('')
    setPassword('')
    setUsername('')
    setImage('')
    setRole('USER')
    setPreviewImage('')
    resetDataView()
  }
  useEffect(() => {
    if (!_.isEmpty(dataView)) {
      setEmail(dataView.email)
      setUsername(dataView.username)
      setRole(dataView.role)
      if (dataView.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataView.image}`)
      }
    }
  }, [dataView])
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
          <Modal.Title>View a user</Modal.Title>
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
                disabled
              />
            </div>

            <div className='col-6'>
              <label className='form-label'>Role</label>
              <select
                className='form-select'
                onChange={e => setRole(e.target.value)}
                value={role}
                disabled
              >
                <option value='USER'>USER</option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </div>
            <div className='col-12'>
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
      </Modal>
    </>
  )
}

export default ModalViewUser

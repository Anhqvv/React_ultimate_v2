import ModalCreateUser from './ModalCreateUser'
import { FcPlus } from 'react-icons/fc'

import './ManageUser.scss'
import { useState } from 'react'
//manage user
const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  const handleSetShow = () => {
    setShowModalCreateUser(true)
  }
  const handleClose = () => {
    setShowModalCreateUser(false)
  }
  return (
    <div className='manage-user-container'>
      <div className='title'>Manage User</div>
      <div className='users-content'>
        <div className='btn-add-new'>
          <button className='btn btn-primary' onClick={() => handleSetShow()}>
            <FcPlus />
            Add New User
          </button>
        </div>
        <div className='table-users'>table users</div>
        <ModalCreateUser
          show={showModalCreateUser}
          handleClose={handleClose}
        />
      </div>
    </div>
  )
}
export default ManageUser

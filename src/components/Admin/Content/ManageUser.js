import ModalCreateUser from './ModalCreateUser'
import { FcPlus } from 'react-icons/fc'

import './ManageUser.scss'
import { useEffect, useState } from 'react'
import TableUser from './TableUser'
import { getAllUser } from '../../../services/apiServices'
//manage user
const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  const handleSetShow = () => {
    setShowModalCreateUser(true)
  }
  const handleClose = () => {
    setShowModalCreateUser(false)
  }

  const [listUsers, setListUsers] = useState('')

  const fetchAllUser = async () => {
    const data = await getAllUser()
    if (data && data.EC === 0) {
      setListUsers(data.DT)
    }
  }
  useEffect(() => {
    fetchAllUser()
  }, [])
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
        <div className='table-users-container my-3'>
          <TableUser listUsers={ listUsers} />
        </div>
        <ModalCreateUser show={showModalCreateUser} handleClose={handleClose} fetchAllUser={ fetchAllUser} />
      </div>
    </div>
  )
}
export default ManageUser

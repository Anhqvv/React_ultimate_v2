import ModalCreateUser from './ModalCreateUser'
import { FcPlus } from 'react-icons/fc'

import './ManageUser.scss'
import { useEffect, useState } from 'react'
import TableUser from './TableUser'
import { getAllUser } from '../../../services/apiServices'
import ModalUpdateUser from './ModalUpdateUser'
//manage user
const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
  const [dataUpdate, setDataUpdate] = useState({})
  const handleSetShow = () => {
    setShowModalCreateUser(true)
  }
  const handleClose = () => {
    setShowModalCreateUser(false)
    setShowModalUpdateUser(false)
  }

  const handleBtnUpdate = user => {
    setShowModalUpdateUser(true)
    setDataUpdate(user)
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

  const resetDataUpdate = () => {
    setDataUpdate({})
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
        <div className='table-users-container my-3'>
          <TableUser listUsers={listUsers} handleBtnUpdate={handleBtnUpdate} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          handleClose={handleClose}
          fetchAllUser={fetchAllUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          handleClose={handleClose}
          dataUpdate={dataUpdate}
          fetchAllUser={fetchAllUser}
          resetDataUpdate={resetDataUpdate}

        />
      </div>
    </div>
  )
}
export default ManageUser

import ModalCreateUser from './ModalCreateUser'
import { FcPlus } from 'react-icons/fc'

import './ManageUser.scss'
import { useEffect, useState } from 'react'
import TableUser from './TableUser'
import { getAllUser } from '../../../services/apiServices'
import ModalUpdateUser from './ModalUpdateUser'
import ModalViewUser from './ModalViewUser'
//manage user
const ManageUser = () => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false)
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
  const [showModalviewUser, setShowModalViewUser] = useState(false)
  const [dataView, setDataView] = useState({})
  const [dataUpdate, setDataUpdate] = useState({})
  const handleSetShow = () => {
    setShowModalCreateUser(true)
  }
  const handleClose = () => {
    setShowModalCreateUser(false)
    setShowModalUpdateUser(false)
    setShowModalViewUser(false)
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
  const resetDataView = () => {
    setDataView({})
  }

  const handleBtnView = user => {
    setShowModalViewUser(true)
    setDataView(user)
    console.log('my data user view', user)
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
          <TableUser
            listUsers={listUsers}
            handleBtnUpdate={handleBtnUpdate}
            handleBtnView={handleBtnView}
          />
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
        <ModalViewUser
          show={showModalviewUser}
          handleClose={handleClose}
          dataView={dataView}
          resetDataView={resetDataView}
        />
      </div>
    </div>
  )
}
export default ManageUser

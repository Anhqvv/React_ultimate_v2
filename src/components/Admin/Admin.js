import SideBar from './SideBar'
import './Admin.scss'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Admin = props => {
  const [collapsed, setcollapsed] = useState(false)
  return (
    <div className='admin-container'>
      <div className='admin-sidebar'>
        <SideBar collapsed={collapsed} />
      </div>
      <div className='admin-content'>
        <div className='admin-header'>
          <FaBars onClick={() => setcollapsed(!collapsed)} />
        </div>
        <div className='admin-main'>
          <Outlet />
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}

export default Admin

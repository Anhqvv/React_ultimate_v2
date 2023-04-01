import App from './App'
import User from './components/User/User'
import Admin from './components/Admin/Admin'
import HomePage from './components/Home/HomePage'
import ManageUser from './components/Admin/Content/ManageUser'
import Dashboard from './components/Admin/Content/Dashboard'
import Login from './components/Auth/Login'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/users' element={<User />} />
        </Route>
        <Route path='/admins' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='manage-users' element={<ManageUser />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
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
    </>
  )
}

export default Layout
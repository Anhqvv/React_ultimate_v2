import App from './App'
import Admin from './components/Admin/Admin'
import HomePage from './components/Home/HomePage'
import ManageUser from './components/Admin/Content/ManageUser'
import Dashboard from './components/Admin/Content/Dashboard'
import Login from './components/Auth/Login'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Register from './components/Auth/Register'
import DetailQuiz from './components/User/DetailQuiz'
import ListQuiz from './components/User/ListQuiz'
const NotFound = () => {
  return (
    <div className='alert alert-danger container mt-3' role='alert'>
      404.Not found with your URL
    </div>
  )
}
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/users' element={<ListQuiz />} />
        </Route>
        <Route path='/admins' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='manage-users' element={<ManageUser />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='quiz/:id' element={<DetailQuiz />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={1000}
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

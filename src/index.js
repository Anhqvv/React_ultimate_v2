import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import User from './components/User/User'
import Admin from './components/Admin/Admin'
import reportWebVitals from './reportWebVitals'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import ManageUser from './components/Admin/Content/ManageUser'
import Dashboard from './components/Admin/Content/Dashboard'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path='/users' element={<User />} />
        </Route>
        <Route path='/admins' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='manage-users' element={<ManageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

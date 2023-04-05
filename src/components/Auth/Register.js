import { useState } from 'react'
import './Register.scss'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import { postSubmitRegister } from '../../services/apiServices'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const handleShowHidePassword = () => {
    setShowPassword(!showPassword)
  }
  //stateful
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const validateEmail = email => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      }

    const handleSubmitResgister = async () => {
        const isValidate = validateEmail(email)
        if (!isValidate) {
          toast.error('invalid email')
          return
        }
        if (!password) {
            toast.error('invalid password')
            return
        }
        if (!username) {
            toast.error('invalid username')
            return
        }
    const data = await postSubmitRegister(username, email, password)
    if (data && data.EC === 0) {
      toast.success(data.EM)
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
    navigate('/admins/manage-users')
    console.log('my resgister data :', data)
  }
  return (
    <>
      <div className='header-register '>
        Already have an account?{' '}
        <button
          className='btn btn-outline-dark mx-1'
          onClick={() => navigate('/login')}
        >
          Log-in
        </button>
      </div>
      <div className='register-container col-3 mx-auto'>
        <form>
          <h2 className='title'>Register Form</h2>
          <div className='form-group'>
            <label>User name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='form-group my-3'>
            <label>Email (*)</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Password (*)</label>
            <div className='register-password'>
              <input
                type={showPassword ? 'text' : 'password'}
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span onClick={() => handleShowHidePassword()}>
                {showPassword ? <GoEye /> : <GoEyeClosed />}
              </span>
            </div>
          </div>
        </form>
        <button
          type='submit'
          className='btn btn-primary my-5 btn-register'
          onClick={() => handleSubmitResgister()}
        >
          Register
        </button>
      </div>
    </>
  )
}

export default Register

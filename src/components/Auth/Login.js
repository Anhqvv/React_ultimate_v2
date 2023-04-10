import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { postSubmitLogin } from '../../services/apiServices'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { doLogin } from '../../redux/action/action'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    let data = await postSubmitLogin(email, password)
    if (data && data.EC === 0) {
      dispatch(doLogin(data))
      toast.success(data.EM)
      navigate('/')
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
  }
  return (
    <div className='login-container '>
      <div className='header-login'>
        Don't have an account yet?{' '}
        <button
          className='btn btn-outline-dark mx-1'
          onClick={() => navigate('/register')}
        >
          Sign-up
        </button>
      </div>

      <div className='login-content'>
        <div className='title'>QA with TypeForm</div>
        <div className='desc'>Hello, who’s this?</div>
        <div className='form mx-auto my-3 col-3'>
          <form>
            <div className='form-group'>
              <label className='my-1'>Email address</label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label className='my-1'>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </form>

          <div className='my-3'>
            <a href='/'>Forgot password</a>
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={() => handleLogin()}
          >
            Login with QA
          </button>
        </div>
        <div className='go-homepage' onClick={() => navigate('/')}>
          &gt;&gt; Go to Home Page
        </div>
      </div>
    </div>
  )
}

export default Login

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'
import { postSubmitLogin } from '../../services/apiServices'
import { toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    let data = await postSubmitLogin(email, password)
    if (data && data.EC === 0) {
      toast.success(data.EM)
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM)
    }
  }
  return (
    <div className='login-container '>
      <div className='header-login'>Don't have an account yet?</div>
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

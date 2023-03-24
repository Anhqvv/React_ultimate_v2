import axios from './axios'

export const postCreateNewUser = async (
  email,
  password,
  username,
  role,
  image
) => {
  const formData = new FormData()
  formData.append('email', email)
  formData.append('password', password)
  formData.append('username', username)
  formData.append('role', role)
  formData.append('userImage', image)

  return await axios.post('api/v1/participant', formData)
}

export const getAllUser = async () => {
  return await axios.get('api/v1/participant/all')
}

export const putUpdateUser = async (id, username, role, image) => {
  const formData = new FormData()
  formData.append('id', id)
  formData.append('username', username)
  formData.append('role', role)
  formData.append('userImage', image)

  return await axios.put('api/v1/participant', formData)
}

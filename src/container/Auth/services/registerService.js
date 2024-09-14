import { baseUrl } from '../../../services/api'
import { authUrl, registerUrl } from '../urls'


export const registerUser = async (formData) => {
  const apiUrl = `${baseUrl}${authUrl}${registerUrl}`

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      username: formData.username,
      password: formData.password,
    }),
  })

  if (!response.ok) {
    const errMessage = await response.text()
    throw new Error(`Registration failed: ${response.status} ${errMessage}`)
  }

  const userData = await response.json()
  return userData
}

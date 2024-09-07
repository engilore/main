import { baseUrl } from '../../../../services/api'
import { authUrl, loginUrl } from '../../urls'


const apiUrl = `${baseUrl}${authUrl}${loginUrl}`

export const loginUser = async (email, password) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Login failed: ${errorData.message || errorData.error || 'Unknown error'}`)
  }

  const userData = await response.json()
  return userData
}
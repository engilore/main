import { baseUrl } from '../api'
import { authUrl, validateUrl } from '../../container/Auth/urls'


export const validateUser = async (token) => {
  const apiUrl = `${baseUrl}${authUrl}${validateUrl}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Invalid or expired token')
      }
      const errMessage = await response.text()
      throw new Error(`Failed to validate token: ${response.status} ${errMessage}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Validation Error:', error.message)
    throw error
  }
}

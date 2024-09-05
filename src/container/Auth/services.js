import { baseUrl } from '../../services/api'
import { authUrl, logoutUrl, validateUrl } from './urls'

const logoutApiUrl = `${baseUrl}${authUrl}${logoutUrl}`
const validateApiUrl = `${baseUrl}${authUrl}${validateUrl}`


export const logoutUser = async () => {
  try {
    const token = localStorage.getItem('authToken')
    localStorage.removeItem('authToken')

    const response = await fetch(logoutApiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errMessage = await response.text()
      console.error(`Failed to log out: ${response.status} ${errMessage}`)
      return
    }

    const contentType = response.headers.get('Content-Type')
    if (contentType && contentType.includes('application/json')) {
      return await response.json()
    }

    return {}
  } catch (error) {
    console.error('Logout Error:', error.message)
  }
}



export const validate = async (token) => {
  try {
    const response = await fetch(validateApiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errMessage = await response.text()
      throw new Error(`Failed to validate token: ${response.status} ${errMessage}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Validation Error:', error.message)
    throw error
  }
}

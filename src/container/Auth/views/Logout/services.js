import { baseUrl } from '../../../../services/api'
import { authUrl, logoutUrl } from '../../urls'


export const logoutUser = async () => {
  const apiUrl = `${baseUrl}${authUrl}${logoutUrl}`

    try {
      const token = localStorage.getItem('authToken')
      localStorage.removeItem('authToken')
  
      const response = await fetch(apiUrl, {
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
  
import { baseUrl } from '../api'
import { authUrl } from '../urls'
import { updateUrl } from '../urls'


export const updateUser = async (token, formData) => {
    const apiUrl = `${baseUrl}${authUrl}${updateUrl}`
  
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
  
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Update failed: ${response.status} ${errorData.message || errorData.error || 'Unknown error'}`)
    }
  
    return await response.json()
  }
  
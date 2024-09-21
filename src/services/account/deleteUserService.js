import { baseUrl } from '../api'
import { authUrl } from '../urls'
import { deleteUrl } from '../urls'


export const deleteUser = async (token, password) => {
  const apiUrl = `${baseUrl}${authUrl}${deleteUrl}`

  try {
    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })

    if (response.status === 204) {
      return { success: true } 
    }

    const data = await response.json()

    if (!response.ok) {
      throw new Error(`Deletion failed: ${response.status} ${data.message || data.error || 'Unknown error'}`)
    }

    return data
  } catch (error) {
    console.error('Delete User Error:', error.message)
    throw error
  }
}

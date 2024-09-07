import { baseUrl } from '../../services/api'
import { authUrl, validateUrl, updateUrl } from './urls'


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

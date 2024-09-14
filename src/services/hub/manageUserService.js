import { baseUrl } from '../api'
import {
    userListUrl, userDetailUrl, userUpdateUrl, userDeleteUrl, userAssignRoleUrl, userRevokeRoleUrl
} from '../../container/Hub/urls'


export const fetchUsers = async (token) => {
  const apiUrl = `${baseUrl}${userListUrl}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errMessage = await response.text()
      throw new Error(`Failed to fetch users: ${response.status} ${errMessage}`)
    }

    const result = await response.json()

    return result.data
  } catch (error) {
    console.error('Error fetching users:', error.message)
    throw error
  }
}
  

export const fetchUserById = async (token, id) => {
    const apiUrl = `${baseUrl}${userDetailUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to fetch user: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error.message)
      throw error
    }
  }


export const updateUser = async (token, id, userData) => {
    const apiUrl = `${baseUrl}${userUpdateUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to update user: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error updating user ${id}:`, error.message)
      throw error
    }
  }


export const deleteUser = async (token, id) => {
    const apiUrl = `${baseUrl}${userDeleteUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      })
  
      if (response.status === 204) {
        return { success: true }
      }
  
      const data = await response.json()
  
      if (!response.ok) {
        throw new Error(`Failed to delete user: ${response.status} ${data.message || 'Unknown error'}`)
      }
  
      return data
    } catch (error) {
      console.error('Error deleting user:', error.message)
      throw error
    }
  }


export const assignRoleToUser = async (token, id, role) => {
    const apiUrl = `${baseUrl}${userAssignRoleUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role }),
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to assign role: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error assigning role to user ${id}:`, error.message)
      throw error
    }
  }


export const revokeRoleFromUser = async (token, id, role) => {
    const apiUrl = `${baseUrl}${userRevokeRoleUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role }),
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to revoke role: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error revoking role from user ${id}:`, error.message)
      throw error
    }
  }
  
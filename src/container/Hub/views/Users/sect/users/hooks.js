import { useState, useEffect, useCallback } from 'react'
import { fetchUsers, updateUser, deleteUser, assignRoleToUser, revokeRoleFromUser } from '../../../../services/manageService'


export const useUsers = (token) => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const loadUsers = useCallback(async () => {
    setIsLoading(true)
    try {
      const fetchedUsers = await fetchUsers(token)
      setUsers(Array.isArray(fetchedUsers) ? fetchedUsers : [])
    } catch (error) {
      setError('Error fetching users.')
    } finally {
      setIsLoading(false)
    }
  }, [token])

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  const handleCreateOrUpdate = async (userData, isEditing) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    
    try {
      if (isEditing) {
        await updateUser(token, userData.id, userData)
        setSuccess('User updated successfully.')
      }
      loadUsers()
    } catch (error) {
      setError('Failed to update user.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteUser = async (id) => {
    setError(null)
    setSuccess(null)

    try {
      await deleteUser(token, id)
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== id)
      )
      setSuccess('User deleted successfully.')
    } catch (error) {
      setError('Failed to delete user.')
    }
  }

  const handleAssignRole = async (id, role) => {
    console.log(`Assigning role: ${role} to user ID: ${id}`)
    try {
      await assignRoleToUser(token, id, role)
      setSuccess(`Role "${role}" assigned successfully.`)
      loadUsers()
    } catch (error) {
      setError(`Failed to assign role: ${error.message}`)
    }
  }
  
  const handleRevokeRole = async (id, role) => {
    console.log(`Revoking role: ${role} from user ID: ${id}`)
    try {
      await revokeRoleFromUser(token, id, role)
      setSuccess(`Role "${role}" revoked successfully.`)
      loadUsers()
    } catch (error) {
      setError(`Failed to revoke role: ${error.message}`)
    }
  }
  

  return {
    users,
    error,
    success,
    isLoading,
    handleCreateOrUpdate,
    handleDeleteUser,
    handleAssignRole,
    handleRevokeRole,
  }
}

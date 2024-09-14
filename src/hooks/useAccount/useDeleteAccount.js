import { useState } from 'react'
import { useAuth } from '../../contexts/authContexts'
import { deleteUser } from '../../services/account/deleteUserService'


const useDeleteAccount = () => {
  const { isLoading: authLoading, logout } = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (formData) => {
    setError(null)
    setSuccess(null)

    if (!formData.password) {
      setError('Password is required to delete your account.')
      return
    }

    try {
      const token = localStorage.getItem('authToken')
      const response = await deleteUser(token, formData.password)

      if (response.error) {
        setError(response.error)
        return
      }

      setSuccess('Your account has been deleted successfully.')
      localStorage.removeItem('authToken')
      await logout()
      
    } catch (error) {
      console.error('Account deletion error:', error)
      setError('An error occurred while deleting your account.')
    }
  }

  return {
    authLoading,
    error,
    success,
    handleSubmit,
  }
}

export default useDeleteAccount

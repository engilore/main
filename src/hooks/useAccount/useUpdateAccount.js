import { useState } from 'react'
import { useAuth } from '../../contexts/authContexts'
import { updateUser } from '../../services/account/updateUserService'


const useUpdateAccount = () => {
  const { user, isLoading: authLoading, validate } = useAuth()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const profileFields = [
    { name: 'first_name', placeholder: user?.first_name || '', type: 'text', title: 'First Name' },
    { name: 'last_name', placeholder: user?.last_name || '', type: 'text', title: 'Last Name' },
    { name: 'username', placeholder: user?.username || '', type: 'text', title: 'Username' },
    { name: 'email', placeholder: user?.email || '', type: 'email', title: 'Email' },
    { name: 'current_password', type: 'password', title: 'Current Password' },
    { name: 'new_password', type: 'password', title: 'New Password' },
  ]

  const handleSubmit = async (formData) => {
    setError(null)
    setSuccess(null)

    const modifiedData = {}
    Object.keys(formData).forEach((key) => {
      if (formData[key] && formData[key] !== user[key]) {
        modifiedData[key] = formData[key]
      }
    })

    if ((formData.new_password || formData.email) && !formData.current_password) {
      setError("Current password is required to update sensitive information.")
      return
    }

    try {
      const token = localStorage.getItem('authToken')
      const response = await updateUser(token, modifiedData)

      if (response.error) {
        setError(response.error)
        return
      }

      setSuccess("Profile updated successfully.")
      await validate(token)
    } catch (error) {
      console.error("Profile update error:", error)
      setError("An error occurred while updating your profile.")
    }
  }

  return {
    profileFields,
    authLoading,
    error,
    success,
    handleSubmit,
  }
}

export default useUpdateAccount

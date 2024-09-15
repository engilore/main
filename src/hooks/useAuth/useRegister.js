import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContexts'


const useRegister = () => {
  const { register, isLoading } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const registrationFields = [
    { name: 'first_name', type: 'text', placeholder: 'First Name' },
    { name: 'last_name', type: 'text', placeholder: 'Last Name' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'username', type: 'text', placeholder: 'Username' },
    { name: 'password', type: 'password', placeholder: 'Password' },
  ]

  const handleRegistrationSubmit = async (formData) => {
    setError('')
    try {
      await register(formData)
      navigate('/hub')
    } catch (error) {
      console.error(error)
      setError('Registration failed. Please try again.')
    }
  }

  return {
    registrationFields,
    handleRegistrationSubmit,
    isLoading,
    error,
  }
}

export default useRegister

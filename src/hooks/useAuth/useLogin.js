import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContexts'


const useLogin = () => {
  const { login, isLoading } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const loginFields = [
    { name: 'identifier', type: 'text', placeholder: 'Username or Email' },
    { name: 'password', type: 'password', placeholder: 'Password' }
  ]

  const handleLogin = async (formData) => {
    setError(null)
    try {
      await login(formData.identifier, formData.password)
      navigate('/hub')
    } catch (error) {
      console.error('Login error:', error)
      setError('Login failed. Please try again.')
    }
  }

  return {
    loginFields,
    handleLogin,
    isLoading,
    error,
  }
}

export default useLogin

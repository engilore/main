import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContexts'


const useLogout = () => {
  const { logout, user } = useAuth()
  const navigate = useNavigate()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    const handleLogout = async () => {
      setIsLoggingOut(true)

      try {
        await logout()
      } catch (error) {
        console.error('Logout failed:', error)
      } finally {
        navigate('/blog')
      }
    }

    if (user) {
      handleLogout()
    } else {
      navigate('/blog')
    }
  }, [user, logout, navigate])

  return {
    isLoggingOut,
  }
}

export default useLogout

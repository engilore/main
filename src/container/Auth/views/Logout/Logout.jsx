import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'
import Loading from '../../../../components/Loading'


const Logout = () => {
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

  return isLoggingOut ? <Loading /> : null
}

export default Logout
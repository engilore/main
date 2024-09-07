import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'


const Logout = () => {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await logout()
      } catch (error) {
        console.error('Logout failed:', error)
      } finally {
        navigate('/auth/login')
      }
    }

    if (user) {
      handleLogout()
    } else {
      navigate('/auth/login')
    }
  }, [user, logout, navigate])

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  )
}

export default Logout

import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './contexts'
import Loading from '../../components/Loading/index'


const GuestRoute = ({ children, redirectPath = '/blog' }) => {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (user) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />
  }

  return children
}

export default GuestRoute

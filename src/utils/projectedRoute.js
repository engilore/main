import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../container/Auth/contexts'
import Loading from '../components/Loading/index'


const ProtectedRoute = ({
  children,
  allowedRoles = [],
  redirectPath = '/auth/login',
  requireAuth = true,
}) => {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (requireAuth && !user) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />
  }

  if (allowedRoles.length > 0) {
    const hasAllowedRole = allowedRoles.some(role => user[`is_${role}`])
    if (!hasAllowedRole) {
      return <Navigate to="/blog" replace />
    }
  }

  return children
}

export default ProtectedRoute
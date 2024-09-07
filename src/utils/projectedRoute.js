import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../container/Auth/contexts'

/**
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The component(s) to render if conditions are met.
 * @param {string[]} [props.allowedRoles] - Optional roles required to access the route.
 * @param {string} [props.redirectPath='/auth/login'] - Path to redirect to if not authenticated or authorized.
 * @param {boolean} [props.requireAuth=true] - Whether authentication is required to access the route.
 */

const ProtectedRoute = ({
  children,
  allowedRoles = [],
  redirectPath = '/auth/login',
  requireAuth = true,
}) => {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (requireAuth && !user) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />
  }

  if (allowedRoles.length > 0) {
    const hasAllowedRole = allowedRoles.some(role => user[`is_${role}`])
    if (!hasAllowedRole) {
      return <Navigate to="/" replace />
    }
  }

  return children
}

export default ProtectedRoute

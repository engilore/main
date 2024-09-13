import { useAuth } from '../contexts/authContexts'


const hasAllowedRole = (user, allowedRoles = []) => {
  return allowedRoles.some(role => user && user[`is_${role}`])
}

const ProtectedComponent = ({ allowedRoles = [], children }) => {
  const { user } = useAuth()
  
  if (allowedRoles.length > 0 && !hasAllowedRole(user, allowedRoles)) {
    return null
  }
  
  return children
}

export default ProtectedComponent
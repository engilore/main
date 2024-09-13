import { useAuth } from '../contexts/authContexts'


const hasAllowedRole = (user, allowedRoles = []) => {
  console.log('Checking roles for user:', user) // Debugging
  return allowedRoles.some(role => user && user[`is_${role}`])
}

const ProtectedComponent = ({ allowedRoles = [], children }) => {
  const { user } = useAuth()
  
  if (allowedRoles.length > 0 && !hasAllowedRole(user, allowedRoles)) {
    console.log('User does not have the required roles:', allowedRoles)
    return null
  }
  
  return children
}

export default ProtectedComponent
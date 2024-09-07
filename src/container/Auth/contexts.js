import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom' 
import { validateUser } from './services'
import { registerUser } from './views/Register/services'
import { loginUser } from './views/Login/services'
import { logoutUser } from './views/Logout/services'


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const validate = useCallback(async (token) => {
    setIsLoading(true)
    try {
      const userData = await validateUser(token)
      setUser(userData.user)
    } catch (error) {
      console.error('Token validation failed:', error)
      localStorage.removeItem('authToken')
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (token) {
      validate(token)
    } else {
      setIsLoading(false)
    }
  }, [validate])

  const login = async (identifier, password) => {
    setIsLoading(true)
    try {
      const userData = await loginUser(identifier, password)
      setUser(userData.user)
      localStorage.setItem('authToken', userData.token)
      return userData.user
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (formData) => {
    setIsLoading(true)
    try {
      const userData = await registerUser(formData)
      localStorage.setItem('authToken', userData.token)
      setUser(userData.user)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    const token = localStorage.getItem('authToken')
  
    if (!token) {
      setUser(null)
      return navigate('/auth/login')
    }
  
    try {
      await logoutUser(token)
      setUser(null)
      localStorage.removeItem('authToken')
      navigate('/auth/login')
    } catch (error) {
      console.error('Failed to log out:', error)
      setUser(null)
      localStorage.removeItem('authToken')
      navigate('/auth/login')
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, validate, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateUser, loginUser, registerUser, logoutUser } from '../services/auth/index'
import AuthContext from './authContexts'
import Loading from '../components/Loading/index'


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const validate = useCallback(async (token) => {
    setIsLoading(true)
    try {
      const userData = await validateUser(token)
      setUser(userData.user)
      setToken(token)
    } catch (error) {
      console.error('Token validation failed:', error)
      localStorage.removeItem('authToken')
      setUser(null)
      setToken(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')
    if (storedToken) {
      validate(storedToken)
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
      setToken(userData.token)
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
      setToken(userData.token)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    const storedToken = localStorage.getItem('authToken')
  
    if (!storedToken) {
      setUser(null)
      setToken(null)
      return navigate('/blog')
    }
  
    try {
      await logoutUser(storedToken)
      setUser(null)
      setToken(null)
      localStorage.removeItem('authToken')
      navigate('/blog')
    } catch (error) {
      console.error('Failed to log out:', error)
      setUser(null)
      setToken(null)
      localStorage.removeItem('authToken')
      navigate('/auth/login')
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, validate, isLoading }}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}

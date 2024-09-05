import { createContext, useContext, useState } from 'react'

import { logoutUser  } from './services'
import { registerUser } from './views/Register/services'
import { loginUser } from './views/Login/services'


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  const login = async (email, password) => {
    setIsLoading(true)
    try {
      const userData = await loginUser(email, password)
      localStorage.setItem('authToken', userData.token)
      setUser(userData.user)
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
    try {
      await logoutUser() 
      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

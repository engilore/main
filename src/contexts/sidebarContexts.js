import { createContext, useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth >= 1024)
  const location = useLocation()

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarVisible(true)
      } else {
        setSidebarVisible(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSidebarVisible(true)
    } else {
      setSidebarVisible(false)
    }
  }, [location])

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar, setSidebarVisible }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)

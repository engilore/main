import { createContext, useState, useContext, useEffect } from 'react'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth >= 1024)

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

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar, setSidebarVisible }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)

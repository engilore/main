import { Routes, Route } from 'react-router-dom'
import { useSidebar } from '../../contexts/sidebarContexts'
import ProtectedRoute from '../../utils/projectedRoute'
import { basePath, usersPath } from './paths'

import Sidebar from '../../components/Sidebar/index'
import ToggleButton from '../../components/Sidebar/SidebarToggle'
import { Base, Users } from './views/index'
import { HeroSection } from './views/Base/sect/index'

import { Layout, MainContent } from './styles'
import { FaCompassDrafting, FaUserPen } from 'react-icons/fa6'
import { FaScroll, FaUserFriends } from 'react-icons/fa'
import { RiQuillPenLine } from "react-icons/ri"
import { RiSwordFill } from 'react-icons/ri'


const blogLinks = [
  { to: "/posts", icon: <FaScroll />, text: "Post's", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/posts", icon: <FaCompassDrafting />, text: "Draft's", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/posts", icon: <FaUserFriends />, text: "Comrade's", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/conquests", icon: <RiSwordFill />, text: "Conquest's", bgColor: "var(--bg-danger)", hoverColor: "var(--bg-light)" },
  { to: "/hub/users", icon: <FaUserPen />, text: "Manage User's", isDivider: true, bgColor: "var(--bg-danger)", hoverColor: "var(--bg-light)", allowedRoles: ['admin'] },
  { to: "/videos", icon: <RiQuillPenLine />, text: "Create Post", variant: "special", textColor: "var(--clr-primary)", bgColor: "var(--bg-light)"},
  { to: "/videos", icon: <RiSwordFill />, text: "Initiate Conquest", variant: "special", textColor: "var(--clr-white)", bgColor: "var(--bg-secondary)"},
]


const Hub = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar()

  return (
    <>
      <HeroSection />
      <Layout>
        <MainContent>
          <Routes>
            <Route path={basePath} element={<Base />} />
            <Route
              path={usersPath}
              element={
                <ProtectedRoute allowedRoles={['admin']} redirectPath="/hub">
                  <Users />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MainContent>

        <Sidebar
          links={blogLinks}
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />

        {!isSidebarVisible && <ToggleButton toggleSidebar={toggleSidebar} />}
      </Layout>
    </>
  )
}

export default Hub
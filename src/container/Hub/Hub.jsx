import { Routes, Route } from 'react-router-dom'
import { useSidebar } from '../../contexts/sidebarContexts'
import ProtectedRoute from '../../utils/projectedRoute'
import { basePath, usersPath, postsPath } from './paths'

import Sidebar from '../../components/Sidebar/index'
import ToggleButton from '../../components/Sidebar/SidebarToggle'
import { Base, Users, Posts } from './views/index'
import { HeroSection } from './views/Base/sect/index'

import { Layout, MainContent } from './styles'
import { FaUserPen } from 'react-icons/fa6'
import { FaUserFriends,FaScroll } from 'react-icons/fa'
import { MdHub } from 'react-icons/md'
import { RiQuillPenLine } from 'react-icons/ri'


const blogLinks = [
  { to: "/hub", icon: <MdHub />, text: "Hub", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/post/create", icon: <FaUserFriends />, text: "Comrade's", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/hub/users", icon: <FaUserPen />, text: "Manage User's", bgColor: "var(--bg-danger)", hoverColor: "var(--bg-light)", allowedRoles: ['admin'] },
  { to: "/hub/posts", icon: <FaScroll />, text: "Manage Post's", isDivider: true, bgColor: "var(--bg-danger)", hoverColor: "var(--bg-light)", allowedRoles: ['admin'] },
  { to: "/post/create", icon: <RiQuillPenLine />, text: "Create Post", variant: "special", textColor: "var(--clr-primary)", bgColor: "var(--bg-light)"},
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
            <Route
            path={postsPath}
            element={
              <ProtectedRoute allowedRoles={['admin']} redirectPath="/hub">
                <Posts />
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
import { Routes, Route } from 'react-router-dom'
import { useSidebar } from '../../contexts/sidebarContexts'
import { profilePath, deletePath } from './paths'
import ToggleButton from '../../components/Sidebar/SidebarToggle'
import Sidebar from '../../components/Sidebar/index'
import { Profile, Delete } from './views/index'

import { Layout, MainContent } from './styles'
import { MdDeleteOutline } from 'react-icons/md'
import { HiOutlineLogout } from 'react-icons/hi'


const accountLinks = [
  { title: "Account", isDivider: true, to: "/account", text: "Profile" },
  { to: "/auth/logout", icon: <HiOutlineLogout />, text: "Sign Out", variant: "special", textColor: "var(--clr-primary)", bgColor: "transparent"},
  { to: "/account/delete", icon: <MdDeleteOutline />, text: "Delete", variant: "special", textColor: "var(--clr-danger)", bgColor: "var(--bg-danger)"},
]

const Account = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar()

  return (
    <>
    <Layout>
      <MainContent>
      <Routes>
        <Route path={profilePath} element={<Profile />} />
        <Route path={deletePath} element={<Delete />} />
      </Routes>
      </MainContent>

      <Sidebar
          links={accountLinks}
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />

      {!isSidebarVisible && <ToggleButton toggleSidebar={toggleSidebar} />}

    </Layout>
    </>
  )
}

export default Account
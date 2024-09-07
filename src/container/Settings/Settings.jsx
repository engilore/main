import { Routes, Route } from 'react-router-dom'
import { profilePath, deletePath } from './paths'

import Sidebar from '../../components/Sidebar/index'
import { Profile, Delete } from './views/index'

import { Layout, MainContent, SidebarWrapper } from './styles'
import { MdDeleteOutline } from 'react-icons/md'
import { HiOutlineLogout } from 'react-icons/hi'


const settingLinks = [
  { title: "Account", to: "/settings", text: "Profile" },
    { to: "/", text: "Preference's" },
  { to: "/", text: "Notification's" },
  { title: "Subscription", to: "/", text: "Manage" },
  { title: "Auxiliership", to: "/", text: "Manage" },
  { to: "/", text: "Join",},
  { to: "/auth/logout", icon: <HiOutlineLogout />, text: "Sign Out", variant: "special", isDivider: true, textColor: "var(--clr-primary)", bgColor: "transparent"},
  { to: "/settings/delete", icon: <MdDeleteOutline />, text: "Delete", variant: "special", textColor: "var(--clr-danger)", bgColor: "var(--bg-danger)"},
]

const Settings = () => {
  return (
    <>
    <Layout>
      <MainContent>
      <Routes>
        <Route path={profilePath} element={<Profile />} />
        <Route path={deletePath} element={<Delete />} />
      </Routes>
      </MainContent>
      <SidebarWrapper>
        <Sidebar links={settingLinks} />
      </SidebarWrapper>
    </Layout>
    </>
  )
}

export default Settings
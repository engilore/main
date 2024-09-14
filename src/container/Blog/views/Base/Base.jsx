import { useSidebar } from '../../../../contexts/sidebarContexts'
import Sidebar from '../../../../components/Sidebar/index'
import ToggleButton from '../../../../components/Sidebar/SidebarToggle'
import { SpotlightPostSection, FeaturedPostsSection } from './sect/index'

import { Layout, MainContent } from './styles'
import { FaForumbee, FaHandsHelping } from 'react-icons/fa'
import { LuScroll, LuVideo } from 'react-icons/lu'
import { FaFireFlameSimple } from 'react-icons/fa6'
import { MdNaturePeople } from 'react-icons/md'
import { TbSwords } from 'react-icons/tb'


const blogLinks = [
  { to: "/guardians", icon: <MdNaturePeople />, text: "Guardian's", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/dialogue", icon: <FaForumbee />, text: "Dialogue", bgColor: "var(--bg-dark)", hoverColor: "var(--bg-accent)" },
  { to: "/conquests", icon: <TbSwords />, text: "Conquest's", bgColor: "var(--bg-danger)", hoverColor: "var(--bg-light)" },
  { to: "/posts", icon: <LuScroll />, text: "Post's", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/videos", icon: <LuVideo />, text: "Video's", bgColor: "var(--bg-dark)", isDivider: true, hoverColor: "var(--bg-accent)" },
  { to: "/videos", icon: <FaHandsHelping />, text: "Benafaction", variant: "special", textColor: "var(--clr-primary)", bgColor: "var(--bg-accent)"},
  { to: "/", icon: <FaFireFlameSimple />, text: "Auxiliership", variant: "special", bgColor: "var(--bg-primary)"},
]


const Base = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar()

  return (
    <>
      <SpotlightPostSection />
      <Layout>
        <MainContent>
          <FeaturedPostsSection />
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

export default Base

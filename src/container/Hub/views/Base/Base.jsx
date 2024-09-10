import { useSidebar } from '../../../../contexts/sidebarContexts'
import Sidebar from '../../../../components/Sidebar/index'
import ToggleButton from '../../../../components/Sidebar/SidebarToggle'
import { HeroSection, CategorySection, TopicSection } from './sect/index'

import { Layout, MainContent } from './styles'
import { FaScroll, FaForumbee, FaVideo, FaHandsHelping } from 'react-icons/fa'
import { FaFireFlameSimple } from "react-icons/fa6"
import { MdNaturePeople } from "react-icons/md"
import { TbSwords } from "react-icons/tb"


const blogLinks = [
  { to: "/guardians", icon: <MdNaturePeople />, text: "Guardians", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/dialogue", icon: <FaForumbee />, text: "Dialogue", bgColor: "var(--bg-dark)", hoverColor: "var(--bg-accent)" },
  { to: "/conquests", icon: <TbSwords />, text: "Conquest's", bgColor: "var(--bg-danger)", hoverColor: "var(--bg-light)" },
  { to: "/posts", icon: <FaScroll />, text: "Posts", bgColor: "var(--bg-primary)", hoverColor: "var(--bg-secondary)" },
  { to: "/videos", icon: <FaVideo />, text: "Videos", bgColor: "var(--bg-dark)", hoverColor: "var(--bg-accent)" },
  { to: "/videos", icon: <FaHandsHelping />, text: "Benafaction", isDivider: true, variant: "special", textColor: "var(--clr-primary)", bgColor: "var(--bg-accent)"},
  { to: "/", icon: <FaFireFlameSimple />, text: "Auxiliership", variant: "special", bgColor: "var(--bg-primary)"},
]


const Base = () => {
  const { isSidebarVisible, toggleSidebar } = useSidebar()

  return (
    <>
      <HeroSection />
      <Layout>
        <MainContent>
          <CategorySection />
          <TopicSection />
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
import PropTypes from 'prop-types'
import useScrollLock from '../../hooks/index'
import SidebarContent from './SidebarContent'
import SidebarHeader from './SidebarHeader'

import { Side } from './styles'


const Sidebar = ({ links, isSidebarVisible, toggleSidebar }) => {
  useScrollLock(isSidebarVisible)

  return (
    <Side $isSidebarVisible={isSidebarVisible}>
      {isSidebarVisible && (
        <>
          <SidebarHeader toggleSidebar={toggleSidebar} />
          <SidebarContent links={links} />
        </>
      )}
    </Side>
  )
}

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string.isRequired,
      icon: PropTypes.element,
      text: PropTypes.string.isRequired,
      isDivider: PropTypes.bool,
      variant: PropTypes.string,
      bgColor: PropTypes.string,
      hoverColor: PropTypes.string,
    })
  ).isRequired,
  isSidebarVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

export default Sidebar

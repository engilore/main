import PropTypes from 'prop-types'

import { FaTimes } from 'react-icons/fa'
import { CloseButton, Title } from './styles'

const SidebarHeader = ({ title, toggleSidebar }) => (
  <div>
    {title && <Title>{title}</Title>}
    <CloseButton onClick={toggleSidebar}>
      <FaTimes size={24} />
    </CloseButton>
  </div>
)

SidebarHeader.propTypes = {
  title: PropTypes.string,
  toggleSidebar: PropTypes.func.isRequired,
}

export default SidebarHeader

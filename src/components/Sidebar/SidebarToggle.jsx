import React from 'react'
import PropTypes from 'prop-types'

import { ToggleButton } from './styles'
import { IoArrowUndo } from "react-icons/io5"


const SidebarToggleButton = ({ toggleSidebar }) => (
  <ToggleButton onClick={toggleSidebar}>
    <IoArrowUndo size={24} />
  </ToggleButton>
)

SidebarToggleButton.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
}

export default SidebarToggleButton

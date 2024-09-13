import PropTypes from 'prop-types'
import ProtectedComponent from '../../utils/protectedComponent'
import { useSidebar } from '../../contexts/sidebarContexts' 
import Button from '../Button/index'

import { StyledLink, Item, ItemWrapper, Text } from './styles'


const SidebarLink = ({ to, text, icon, variant, bgColor, textColor, hoverColor, allowedRoles = [] }) => {
  const { toggleSidebar } = useSidebar()

  return (
    <ProtectedComponent allowedRoles={allowedRoles}>
      {variant === 'special' ? (
        <Button
          text={text}
          size="medium"
          shape="pill"
          bgColor={bgColor}
          textColor={textColor}
          hoverColor={hoverColor}
          icon={icon}
          iconRight={false}
          to={to}
        />
      ) : (
        <StyledLink to={to} onClick={toggleSidebar}>
          <Item>
            <ItemWrapper>
              {icon && icon}
              <Text>{text}</Text>
            </ItemWrapper>
          </Item>
        </StyledLink>
      )}
    </ProtectedComponent>
  )
}

SidebarLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  variant: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  hoverColor: PropTypes.string,
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
}

export default SidebarLink
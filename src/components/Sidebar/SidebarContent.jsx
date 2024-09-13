import React from 'react'
import PropTypes from 'prop-types'
import SidebarLink from './SidebarLink'

import { Contain, Content, Items, Title, Divider, ItemContainer } from './styles'


const SidebarContent = ({ links }) => (
  <Contain>
    <Content>
      <Items>
        {links.map(({ title, to, icon, text, isDivider, variant, bgColor, textColor, allowedRoles }, index) => (
          <React.Fragment key={index}>
            {title && <Title>{title}</Title>}

            <ItemContainer>
              <SidebarLink
                to={to}
                icon={icon}
                text={text}
                variant={variant}
                bgColor={bgColor}
                textColor={textColor}
                allowedRoles={allowedRoles}
              />
            </ItemContainer>

            {isDivider && <Divider />}

          </React.Fragment>
        ))}
      </Items>
    </Content>
  </Contain>
)

SidebarContent.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string.isRequired,
      icon: PropTypes.element,
      text: PropTypes.string.isRequired,
      isDivider: PropTypes.bool,
      variant: PropTypes.string,
      bgColor: PropTypes.string,
      textColor: PropTypes.string,
      allowedRoles: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
}

export default SidebarContent

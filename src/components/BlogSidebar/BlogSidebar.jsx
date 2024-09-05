import React from 'react'
import { FaScroll, FaForumbee, FaVideo, FaHandsHelping } from 'react-icons/fa'
import { FaFireFlameSimple } from "react-icons/fa6"
import { MdNaturePeople } from "react-icons/md"
import { TbSwords } from "react-icons/tb"

import {
    Sidebar,
    Contain,
    Content,
    Items,
    Item,
    StyledLink,
    ItemWrapper,
    Text,
    Divider
} from './styles'


const links = [
  { to: "/guardians", icon: <MdNaturePeople />, text: "Guardians" },
  { to: "/dialogue", icon: <FaForumbee />, text: "Dialogue" },
  { to: "/conquests", icon: <TbSwords />, text: "Conquest's" },
  { to: "/posts", icon: <FaScroll />, text: "Posts" },
  { to: "/videos", icon: <FaVideo />, text: "Videos" },
  { to: "/videos", icon: <FaHandsHelping />, text: "Benafaction", isDivider: true  },
  { to: "/", icon: <FaFireFlameSimple />, text: "Auxiliership", variant: "special" },
]

const BlogSidebar = () => {
  return (
    <Sidebar>
      <Contain>
        <Content>
          <Items>
            {links.map(({ to, icon, text, isDivider, variant }, index) => (
              <React.Fragment key={index}>
                {isDivider && <Divider key={`divider-${index}`} />}
                <StyledLink to={to} key={to}>
                  <Item $special={variant === "special"}>
                    <ItemWrapper>
                      {icon}
                      <Text>{text}</Text>
                    </ItemWrapper>
                  </Item>
                </StyledLink>
              </React.Fragment>
            ))}
          </Items>
        </Content>
      </Contain>
    </Sidebar>
  )
}

export default BlogSidebar
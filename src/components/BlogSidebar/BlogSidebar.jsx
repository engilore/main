import { FaScroll, FaForumbee, FaVideo, FaHandsHelping } from 'react-icons/fa'
import { MdNaturePeople, MdJoinFull } from "react-icons/md"
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


const BlogSidebar = () => {
  return (
    <Sidebar>
      <Contain>
        <Content>
          <Items>
            
            <StyledLink to="/guardians">
              <Item>
                <ItemWrapper>
                  <MdNaturePeople />
                  <Text>Guardians</Text>
                </ItemWrapper>
              </Item>
            </StyledLink>
            
            <StyledLink to="/dialogue">
              <Item>
                <ItemWrapper>
                  <FaForumbee />
                  <Text>Dialogue</Text>
                </ItemWrapper>
              </Item>
            </StyledLink>

            <StyledLink to="/dialogue">
              <Item>
                <ItemWrapper>
                  <TbSwords />
                  <Text>Conquest's</Text>
                </ItemWrapper>
              </Item>
            </StyledLink>
            
            <StyledLink to="/posts">
              <Item>
                <ItemWrapper>
                  <FaScroll />
                  <Text>Posts</Text>
                </ItemWrapper>
              </Item>
            </StyledLink>
            
            <StyledLink to="/videos">
              <Item>
                <ItemWrapper>
                  <FaVideo />
                  <Text>Videos</Text>
                </ItemWrapper>
              </Item>
            </StyledLink>

            <Divider />

            <StyledLink to="/contribute">
              <Item>
                <ItemWrapper>
                  <FaHandsHelping />
                  <Text>Contribute</Text>
                </ItemWrapper>
              </Item>
            </StyledLink>

            <StyledLink to="/">
              <Item>
                <ItemWrapper>
                  <MdJoinFull />
                  <Text>Subscribe</Text>
                </ItemWrapper>
              </Item>
            </StyledLink>

          </Items>
        </Content>
      </Contain>
    </Sidebar>
  )
}

export default BlogSidebar

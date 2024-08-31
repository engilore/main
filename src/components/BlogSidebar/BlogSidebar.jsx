import { FaScroll, FaForumbee, FaVideo, FaHandsHelping } from 'react-icons/fa'
import { MdNaturePeople, MdJoinFull } from "react-icons/md"

import {
    Sidebar,
    Contain,
    Content,
    Items,
    Item,
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
            
            <Item>
              <ItemWrapper>
                <MdNaturePeople />
                <Text>Guardians</Text>
              </ItemWrapper>
            </Item>
            <Item>
              <ItemWrapper>
                <FaForumbee />
                <Text>Forum</Text>
              </ItemWrapper>
            </Item>
            <Item>
              <ItemWrapper>
                <FaScroll />
                <Text>Posts</Text>
              </ItemWrapper>
            </Item>
            <Item>
              <ItemWrapper>
                <FaVideo />
                <Text>Videos</Text>
              </ItemWrapper>
            </Item>

            <Divider />

            <Item>
              <ItemWrapper>
                <FaHandsHelping />
                <Text>Contribute</Text>
              </ItemWrapper>
            </Item>

            <Item>
              <ItemWrapper>
                <MdJoinFull />
                <Text>Subscribe</Text>
              </ItemWrapper>
            </Item>

          </Items>
        </Content>
      </Contain>
    </Sidebar>
  );
};

export default BlogSidebar;

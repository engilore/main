import { useAuth } from '../../../../../Auth/contexts'
import Button from '../../../../../../components/Button/index'

import {
  Section,
  Contain,
  Content,
  Header,
  Description,
  PostContainer
} from './heroStyle'
import { RiQuillPenLine } from "react-icons/ri"


const Hero = () => {
  const { user } = useAuth()
  const userName = user?.last_name

  return (
    <Section>
      <Contain>
        <Content>
          <Header>Greetings, Mr. {userName}.</Header>
          <Description>
            Manage everything you have going on in Engilore through here, Guardian's Hub.
          </Description>
          <PostContainer>
            <Button
              text="Create Post"
              to="/post/create"
              size="medium"
              shape="rounded"
              bgColor="var(--bg-secondary)"
              textColor="var(--clr-white)"
              hoverColor="none"
              icon={<RiQuillPenLine />}
            />
          </PostContainer>
        </Content>
      </Contain>
    </Section>
  )
}

export default Hero

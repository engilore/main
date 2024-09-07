import { useAuth } from '../../../../../Auth/contexts'

import {
  Section,
  Contain,
  Content,
  Header,
  Description,
} from './heroStyle'


const Hero = () => {
  const { user } = useAuth()
  const userName = user?.first_name

  return (
    <Section>
      <Contain>
        <Content>
          <Header>{userName}.</Header>
          <Description>
            Manage everything you have going on.
          </Description>
        </Content>
      </Contain>
    </Section>
  )
}

export default Hero

import { useState } from 'react'
import Button from '../../../../../../components/Button/index'

import {
  Section,
  Contain,
  Content,
  Header,
  Description,
  ImageContainer,
  Image,
  MembershipContainer,
} from './heroStyle'
import clint from '../../../../../../assets/clint.png'
import { FaFireFlameSimple } from 'react-icons/fa6'


const Hero = () => {
  const [hasImage, setHasImage] = useState(false)

  return (
    <Section>
      <Contain>
        <Content>
          <Header>Engilore: From Thought to Theorem</Header>
          <Description>
            Engilore is my arena, where I, Lalo Blanc, engage in the noble combat of ideas,
            challenging the staid and stirring the stagnant.
          </Description>
          <MembershipContainer>
            <Button
              text="Become a Auxiliary"
              size="medium"
              shape="pill"
              bgColor="var(--bg-primary)"
              hoverColor="none"
              icon={<FaFireFlameSimple />}
              iconRight={false}
              to="/auxiliership"
            />
          </MembershipContainer>
        </Content>
        <ImageContainer>
          <Image
            src={clint}
            alt="Clint Eastwood Pigeon"
            onLoad={() => setHasImage(true)}
            $hasImage={hasImage}
          />
        </ImageContainer>
      </Contain>
    </Section>
  )
}

export default Hero

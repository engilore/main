import { useState } from 'react'
import { FaFireFlameSimple } from 'react-icons/fa6'
import {
  Section,
  Contain,
  Content,
  Header,
  Description,
  ImageContainer,
  Image,
  MembershipContainer,
  MemberBTN,
} from './heroStyle'

import clint from '../../../../../../assets/clint.png'


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
            <MemberBTN to="/auxiliership">
              Become a Auxiliary
              <FaFireFlameSimple />
            </MemberBTN>
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

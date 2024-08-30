import { useState } from 'react'
import {
    Section,
    Contain,
    Content,
    Header,
    Description,
    ImageContainer,
    Image
} from './heroStyle'

import clint from '../../../assets/clint.png'


const Hero = () => {
  const [loadCompleted, setLoadCompleted] = useState(false);


    return (
      <Section>
        <Contain>
          <Content>
            <Header>Engilore: From Thought to Theorem</Header>
            <Description>
            Engilore is my arena, where I, Lalo Blanc, engage in the noble combat of ideas, 
            challenging the staid and stirring the stagnant. 
            </Description>
          </Content>
          <ImageContainer>
            <Image 
              src={clint} 
              alt="Clint Eastwood Pigeon"
              onLoad={() => setLoadCompleted(true)}
              loadCompleted={loadCompleted}
            />
          </ImageContainer>
        </Contain>
      </Section>
    )
}

export default Hero



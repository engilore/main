import { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6"

import { 
  Animation1
} from '../../../../../../components/Canvas/index'
import {
  Section,
  Contain,
  ImageContainer,
  Image,
  Content,
  Type,
  Title,
  Intro,
  Button,
  ButtonText,
  ButtonIcon
} from './spotlightPostStyle'


const SpotlightPost = () => {
  const post = {
    title: "Exploring the Depths of Quantum Physics",
    type: "Analysis",
    intro: "Dive into the fascinating world of quantum mechanics, where particles behave in ways that challenge our understanding of reality. Discover how these principles are shaping the future of technology.",
    image: "https://via.placeholder.com/800x400",
    link: "/posts/quantum-physics",
  }
  const [loadCompleted, setLoadCompleted] = useState(false)


  return (
    <Section>
      <Animation1 />
      <Contain hasImage={!!post.image}>
        {post.image && (
          <ImageContainer>
            <Image 
              src={post.image} 
              alt={post.title}
              onLoad={() => setLoadCompleted(true)}
              loadCompleted={loadCompleted}
            />
          </ImageContainer>
        )}
        <Content hasImage={!!post.image}>
          <Type>{post.type}</Type>
          <Title>{post.title}</Title>
          <Intro>{post.intro}</Intro>
          <Button href={post.link}>
            <ButtonText>Continue Reading</ButtonText>
            <ButtonIcon>
              <FaArrowRightLong />
            </ButtonIcon>
          </Button>
        </Content>
      </Contain>
    </Section>
  )
}

export default SpotlightPost
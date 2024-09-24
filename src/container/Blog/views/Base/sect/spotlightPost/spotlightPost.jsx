import { useState, useEffect } from 'react'
import { useFeaturedPost } from '../../../../../../hooks/useBlog/useFeaturedPost'

import Button from '../../../../../../components/Button/index'
import Load from '../../../../../../components/Load/index'
import { FaArrowRightLong } from 'react-icons/fa6'

import {
  Section,
  Contain,
  ImageContainer,
  Image,
  Content,
  Type,
  Title,
  Intro,
  NoPostsMessage
} from './spotlightPostStyle'


const SpotlightPost = () => {
  const { featuredPost, loading, error } = useFeaturedPost()
  const [loadCompleted, setLoadCompleted] = useState(false)

  useEffect(() => {
    setLoadCompleted(false) 
  }, [featuredPost])

  if (loading) return <Load />
  if (error) return <NoPostsMessage>{error}</NoPostsMessage>

  if (!featuredPost) {
    return (
      <Section $centered>
        <NoPostsMessage>No spotlight post available.</NoPostsMessage>
      </Section>
    )
  }

  return (
    <Section>
      <Contain $hasImage={!!featuredPost.featured_image}>
        {featuredPost.featured_image && (
          <ImageContainer>
            <Image 
              src={featuredPost.featured_image} 
              alt={featuredPost.title}
              onLoad={() => setLoadCompleted(true)}
              $loadCompleted={loadCompleted}
            />
          </ImageContainer>
        )}
        <Content $hasImage={!!featuredPost.featured_image}>
          <Type>{featuredPost.type}</Type>
          <Title>{featuredPost.title}</Title>
          <Intro>{featuredPost.summary}</Intro>
          <Button
            text="Continue Reading"
            size="medium"
            shape="rounded"
            bgColor="var(--bg-dark)"
            hoverColor="none"
            icon={<FaArrowRightLong />}
            iconRight
            to={`/post/${featuredPost.id}`}
          />
        </Content>
      </Contain>
    </Section>
  )
}

export default SpotlightPost

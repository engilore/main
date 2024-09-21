import { useState, useEffect } from 'react'
import { useFetchPosts } from '../../../../../../hooks/useBlog/useFetchPosts'

import Button from '../../../../../../components/Button/index'
import Load from '../../../../../../components/Load/index'

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
import { FaArrowRightLong } from 'react-icons/fa6'


const SpotlightPost = () => {
  const { posts: visiblePosts = [], loading, error } = useFetchPosts(5)
  const [loadCompleted, setLoadCompleted] = useState(false)
  const featuredPost = visiblePosts.length > 0 
    ? visiblePosts.find(post => post.is_featured) || visiblePosts[0] 
    : null
    
  useEffect(() => {
    setLoadCompleted(false) 
  }, [featuredPost])

  if (loading && !featuredPost) return <Load />

  return (
    <Section>
      {error && <NoPostsMessage>{error}</NoPostsMessage>}
      {!featuredPost && !error && <NoPostsMessage>No spotlight post available.</NoPostsMessage>}
      {featuredPost && (
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
      )}
    </Section>
  )
}

export default SpotlightPost

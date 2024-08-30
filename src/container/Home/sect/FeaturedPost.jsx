import React from 'react'

import {
    Section,
    ArmsWrapper,
    ArmsTitle,
    CoatOfArms,
    Contain,
    Post,
    Title,
    PostMeta,
    PostType,
    PostDate,
    TagPills,
    Tag
} from './featuredPostStyle'

import badge from '../../../assets/badge.svg'

const featuredPosts = [
  {
    title: "Post One Title",
    types: ["Analysis", "Research"],
    date: "August 29, 2024",
    content: "Short content summary for post one...",
    tags: ["Philosophy", "Science"]
  },
  {
    title: "Post Two Title",
    types: ["Poem"],
    date: "August 29, 2024",
    content: "Short content summary for post one...",
    tags: ["Philosophy", "Science","Photonics"]
  },
  {
    title: "Post Two Title",
    types: ["Poem"],
    date: "August 29, 2024",
    content: "Short content summary for post one...",
    tags: ["Philosophy", "Science","Photonics"]
  },
  {
    title: "Post Three Title",
    types: ["Memoir", "Treatise"],
    date: "August 28, 2024",
    content: "Short content summary for post two...",
    tags: ["Education"]
  }
]

const FeaturedPosts = () => {
  return (
    <Section>
      <ArmsWrapper>
        <ArmsTitle>The Aegis of the Noble Will</ArmsTitle>
        <CoatOfArms src={badge} alt="Coat of Arms" />
      </ArmsWrapper>
      <Contain>
        {featuredPosts.slice(0, 4).map((post, index) => (
          <Post to={`/post-url-${index}`} key={index}>
            <Title>{post.title}</Title>
            <PostMeta>
              <PostType>
                {post.types.map((type, index) => (
                  <span key={index}>{type}</span>
                ))}
              </PostType>
              <PostDate>{post.date}</PostDate>
            </PostMeta>
            <TagPills>
              {post.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagPills>
          </Post>
        ))}
      </Contain>
    </Section>
  )
}

export default FeaturedPosts

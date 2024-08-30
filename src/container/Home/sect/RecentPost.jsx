import React from 'react'

import {
  Section,
  Post,
  Contain,
  Title,
  Intro,
  PostMeta,
  PostDate,
  PostType,
  Header,
  TagPills,
  Tag
} from './recentPostStyle'


const postData = {
  title: "Lorem Ipsum Dolor Sit",
  types: ["Analysis", "Memoir", "Research"],
  date: "August 29, 2024",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tags: ["Philosophy", "Education", "Science"]
}

const RecentPost = () => {
  return (
    <Section>
      <Header>Most Recent Post :</Header>
      <Post to="/post-url">
        <Contain>
          <Title>{postData.title}</Title>
          <PostMeta>
            <PostType>
              {postData.types.map((type, index) => (
                <span key={index}>{type}</span>
              ))}
            </PostType>
            <PostDate>
              {postData.date}
            </PostDate>
          </PostMeta>
          <Intro>{postData.content}</Intro>
          <TagPills>
            {postData.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagPills>
        </Contain>
      </Post>
    </Section>
  )
}

export default RecentPost

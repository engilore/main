import React from 'react'
import { useFetchPosts } from '../../../../hooks/useBlog/useFetchPosts'
import Tag from '../../../../components/Tag/index'
import Load from '../../../../components/Load/index' 


import {
  PostContainer,
  Title,
  PostMeta,
  PostType,
  PostDate,
  TagPills,
  Author,
} from './styles'

const Post = ({ count = 4 }) => {
  const { posts, loading, error } = useFetchPosts(count)

  if (loading) {
    return <Load />
  }

  if (error) {
    return <div>Error: {error.message}</div> 
  }

  const postData = posts?.data || []

  if (!postData.length) {
    return <div>No posts found.</div>
  }

  return (
    <>
      {postData.map((post, index) => (
        <PostContainer key={index}>
          <PostType>
            {Array.isArray(post.type) ? (
              post.type.map((type, index) => (
                <span key={index}>{type}</span>
              ))
            ) : (
              <span>{post.type}</span>
            )}
          </PostType>
          <Title>{post.title}</Title>
          <Author>- {post.author.first_name} {post.author.last_name}</Author>
          <PostMeta>
            <PostDate>{new Date(post.published_at).toLocaleDateString()}</PostDate>
          </PostMeta>
          {post.topics && post.topics.length > 0 && (
            <TagPills>
              {post.topics.map(tag => (
                <Tag
                  key={tag}
                  text={tag}
                  textColor="var(--clr-secondary)"
                  bgColor="var(--bg-light)"
                  outlined={true}
                  borderColor="var(--bg-light)"
                />
              ))}
            </TagPills>
          )}
        </PostContainer>
      ))}
    </>
  )
}

export default Post
import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchPosts } from '../../../../hooks/useBlog/useFetchPosts'
import Tag from '../../../../components/Tag/index'
import Load from '../../../../components/Load/index'
import ErrorMessage from '../../../../components/ErrorMessage/index'

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
  const { visiblePosts, loading, error } = useFetchPosts(count)

  if (loading) return <Load />

  if (error) return <ErrorMessage message={error} />

  if (!visiblePosts.length) return <div>No posts found.</div>

  return (
    <>
      {visiblePosts.map((post, index) => (
        <PostContainer as={Link} to={`/post/${post.id}`} key={index}>
          <PostType>
            {Array.isArray(post.type) ? (
              post.type.map((type, idx) => <span key={idx}>{type}</span>)
            ) : (
              <span>{post.type}</span>
            )}
          </PostType>
          <Title>{post.title}</Title>
          <Author>- {post.author?.first_name} {post.author?.last_name}</Author>
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
                  outlined
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

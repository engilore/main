import React, { useState, useEffect } from 'react'
import { fetchPosts } from '../../../../services/blog/postService'
import Tag from '../../../../components/Tag/index'

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
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await fetchPosts()
        setPosts(fetchedPosts.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div> 
  }

  return (
    <>
      {posts.slice(0, count).map((post, index) => (
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
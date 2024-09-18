import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../../../contexts/authContexts'
import { useFetchPosts } from '../../../../../../hooks/useBlog/useFetchPosts'
import { useDeletePost } from '../../../../../../hooks/useBlog/useDeletePost'
import { useInfiniteScroll } from '../../../../../../hooks/useInfiniteScroll'

import PostList from '../../../../../../components/PostList/index'
import Load from '../../../../../../components/Load/index'
import ErrorMessage from '../../../../../../components/ErrorMessage/index'

import { Section, Contain, Content, Header } from './postsStyles'


const Posts = () => {
  const { token } = useAuth()

  const { visiblePosts, loading, error, hasMore, loadMorePosts } = useFetchPosts(5)
  const { lastPostElementRef } = useInfiniteScroll(loading, hasMore, loadMorePosts)
  const navigate = useNavigate()
  const { handleDeletePost, loading: deleteLoading, error: deleteError } = useDeletePost(token)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (visiblePosts) {
      setPosts(visiblePosts)
    }
  }, [visiblePosts])

  const handleViewPost = (postId) => {
    navigate(`/post/${postId}`)
  }

  const handleDelete = (postId) => {
    handleDeletePost(postId, () => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId))
    })
  }

  if (loading || deleteLoading) return <Load />
  if (error || deleteError) return <ErrorMessage>{error || deleteError}</ErrorMessage>

  return (
    <Section>
      <Header>All Published Posts</Header>
      <Contain>
        <Content>
          <PostList 
            posts={posts}
            title="Published Posts"
            isDraft={false}
            handleView={handleViewPost}
            handleDelete={handleDelete}
            lastPostElementRef={lastPostElementRef}
          />
        </Content>
      </Contain>
    </Section>
  )
}

export default Posts

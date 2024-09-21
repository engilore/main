import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetchPosts } from '../../../../../../hooks/useBlog/useFetchPosts'

import ErrorMessage from '../../../../../../components/ErrorMessage/index'
import PostManageList from '../../../../../../components/PostManageList/index'
import Load from '../../../../../../components/Load/index'

import { Section, Contain, PostsHeader } from './postsStyles'

const Posts = () => {
  const { posts, loading, error } = useFetchPosts()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)

  const handleViewPost = (postId) => {
    navigate(`/post/${postId}`)
  }

  useEffect(() => {
    if (error) {
      setErrorMessage(`Error: ${error}`)
    }

  }, [error, posts])

  if (loading) return <Load />

  return (
    <Section>
      <PostsHeader>All Posts</PostsHeader>
      <Contain>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        
        {posts && posts.length > 0 && (
          <PostManageList
            posts={posts}
            title="Published"
            isDraft={false}
            handleView={handleViewPost}
          />
        )}
      </Contain>
    </Section>
  )
}

export default Posts

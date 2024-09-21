import { useNavigate } from 'react-router-dom'
import useUserPosts from '../../../../../../hooks/useBlog/useUserPosts'
import PostManageList from '../../../../../../components/PostManageList/index'
import Load from '../../../../../../components/Load/index'

import { Section, Contain, PostsHeader } from './postsStyle'


const Posts = () => {
  const { publishedPosts, draftPosts, loading, error } = useUserPosts()
  const navigate = useNavigate()

  const handleViewPost = (postId, isDraft) => {
    if (isDraft) {
      navigate(`/post/draft/${postId}`)
    } else {
      navigate(`/post/${postId}`)
    }
  }

  
  if (loading) return <Load />
  if (error) return <p>{error}</p>

  return (
    <Section>
      <Contain>
        <PostsHeader>Your Posts</PostsHeader>
        <PostManageList 
          posts={draftPosts} 
          title="Drafts" 
          isDraft={true} 
          handleView={handleViewPost} 
        />
        <PostManageList 
          posts={publishedPosts} 
          title="Published" 
          isDraft={false} 
          handleView={handleViewPost} 
        />
      </Contain>
    </Section>
  )
}

export default Posts

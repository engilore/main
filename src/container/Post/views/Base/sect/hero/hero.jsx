import { useNavigate } from 'react-router-dom'
import useUserPosts from '../../../../../../hooks/useBlog/useUserPosts'
import PostList from '../../../../../../components/PostList/index'

import { Section, Contain, Content } from './heroStyle'


const Hero = () => {
  const { publishedPosts, draftPosts, loading, error } = useUserPosts()
  const navigate = useNavigate()

  const handleView = (postId, isDraftPost) => {
    if (!postId) {
      console.error('Invalid postId:', postId)
      return
    }
    navigate(`/post/${postId}`, { state: { isDraft: isDraftPost } })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <Section>
      <Contain>
        <Content>
          <PostList posts={draftPosts} title="Drafts" isDraft={true} handleView={handleView} />
          <PostList posts={publishedPosts} title="Published Posts" isDraft={false} handleView={handleView} />
        </Content>
      </Contain>
    </Section>
  )
}

export default Hero

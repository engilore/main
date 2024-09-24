import { usePosts } from '../../hooks/useBlog/usePosts'
import Post from '../Post/index'
import Load from '../Load/index'
import ErrorMessage from '../ErrorMessage/index'

import { PostContainer, NoPostsMessage } from './styles'


const PostList = ({ count = 1 }) => {
  const { posts, loading, error } = usePosts(count)

  if (loading && !posts.length) return <Load />

  if (error) return <ErrorMessage message={error} />

  if (!posts.length) {
    return (
      <PostContainer centered>
        <NoPostsMessage>No posts found.</NoPostsMessage>
      </PostContainer>
    )
  }

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  )
}

export default PostList

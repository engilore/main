import { useState } from 'react'
import { usePosts } from '../../../../../../hooks/useBlog/usePosts'
import Post from '../../../../../../components/Post/index'
import Pagination from '../../../../../../components/Pagination/index'
import Load from '../../../../../../components/Load/index'
import ErrorMessage from '../../../../../../components/ErrorMessage/index'


const Posts = () => {
  const [page, setPage] = useState(1)
  const limit = 4
  const { posts, loading, error, totalPosts } = usePosts(page, limit)
  const totalPages = Math.ceil(totalPosts / limit)

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1)
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prev => prev - 1)
    }
  }

  if (loading) return <Load />
  
  if (error) return <ErrorMessage message={error} />

  return (
    <div>
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />
    </div>
  )
}

export default Posts

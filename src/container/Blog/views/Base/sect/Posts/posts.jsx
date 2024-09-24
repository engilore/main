import React, { useState } from 'react'
import Post from '../../../../../../components/Post/index'
import { usePosts } from '../../../../../../hooks/useBlog/usePosts'

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

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div>
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Posts

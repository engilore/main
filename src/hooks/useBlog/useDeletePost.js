import { useState } from 'react'
import { deletePost } from '../../services/blog/postService'


export const useDeletePost = (token) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleDeletePost = async (postId, onSuccess) => {
    if (!postId || !token) {
      setError('Post ID or token is missing')
      return
    }

    setLoading(true)
    setError(null)

    try {
      await deletePost(token, postId)
      if (onSuccess) onSuccess()
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { handleDeletePost, loading, error }
}

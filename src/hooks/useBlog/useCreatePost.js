import { useState } from 'react'
import { createPost } from '../../services/blog/postService'


const useCreatePost = (token) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleCreatePost = async (postData) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      await createPost(token, postData) 
      setSuccess('Post created successfully')
    } catch (err) {
      setError(`Failed to create post: ${err.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return { handleCreatePost, isLoading, error, success }
}

export default useCreatePost

import { useState } from 'react'
import { createPost } from '../../services/blog/postService'
import { useNavigate } from 'react-router-dom'


const useCreatePost = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const navigate = useNavigate()

  const handleCreatePost = async (formData) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    const token = localStorage.getItem('authToken')
    try {
      const postData = {
        ...formData,
        category: formData.category.split(',').map(cat => cat.trim())
      }
      await createPost(token, postData)
      setSuccess('Post created successfully')
      navigate('/posts')
    } catch (error) {
      setError('Failed to create post')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    handleCreatePost,
    isLoading,
    error,
    success
  }
}

export default useCreatePost

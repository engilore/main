import { useState } from 'react'
import { toggleFeaturePost } from '../../services/blog/postService'


export const useToggleFeaturePost = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const toggleFeature = async (postId) => {
    setLoading(true)
    setError(null)
    const token = localStorage.getItem('authToken')

    try {
      const response = await toggleFeaturePost(token, postId)
      setSuccess(response.message)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { toggleFeature, loading, error, success }
}
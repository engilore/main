import { useState } from 'react'
import { toggleFeaturePost } from '../../services/blog/postFeaturedService'


export const useToggleFeaturePost = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const toggleFeature = async (postId) => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    const token = localStorage.getItem('authToken')

    try {
      const response = await toggleFeaturePost(token, postId)
      setSuccess(response.message)
      return response
    } catch (err) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return { toggleFeature, loading, error, success }
}
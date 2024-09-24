import { useState, useEffect } from 'react'
import { fetchFeaturedPost } from '../../services/blog/postFeaturedService'


export const useFeaturedPost = () => {
  const [featuredPost, setFeaturedPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFeaturedPost()
        setFeaturedPost(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { featuredPost, loading, error }
}

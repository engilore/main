import { useState, useEffect } from 'react'
import { fetchPosts } from '../../services/blog/postService'


export const useFetchPosts = (count = null) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [featuredPost, setFeaturedPost] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true)
      try {
        const { data } = await fetchPosts()
        
        if (count) {
          setPosts(data.slice(0, count))
        } else {
          setPosts(data)
        }

        if (data && data.length > 0) {
          setFeaturedPost(data[0])
        }
      } catch (error) {
        console.error('Error while fetching posts:', error.message)
        setError(error.message || 'Something went wrong while fetching posts.')
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [count])

  return { posts, featuredPost, loading, error }
}

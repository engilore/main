import { useState, useEffect } from 'react'
import { fetchPosts } from '../../services/blog/postService'


export const useFetchPosts = (count = 4) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts(count)
        setPosts(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [count])

  return { posts, loading, error }
}
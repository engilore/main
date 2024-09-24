import { useState, useEffect } from 'react'
import { fetchPosts } from '../../services/blog/postService'


export const usePosts = (page = 1, limit = 5) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPosts, setTotalPosts] = useState(0)

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true)
      try {
        const validPage = page || 1
        const { data, total } = await fetchPosts(validPage, limit)
        setPosts(data)
        setTotalPosts(total)
      } catch (error) {
        console.error('Error while fetching posts:', error.message)
        setError(error.message || 'Something went wrong while fetching posts.')
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [page, limit])

  return { posts, loading, error, totalPosts }
}
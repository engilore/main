import { useState, useEffect } from 'react'
import { fetchPosts } from '../../services/blog/postService'


export const useFetchPosts = (initialCount = 5) => {
  const [posts, setPosts] = useState([])
  const [visiblePosts, setVisiblePosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [count, setCount] = useState(initialCount)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts()
        if (Array.isArray(response.data)) {
          setPosts(response.data)
          setVisiblePosts(response.data.slice(0, count))
          setHasMore(response.data.length > count)
        } else {
          setError('Invalid data format')
        }
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [count])

  const loadMorePosts = () => {
    const newCount = count + 5
    setCount(newCount)
    setVisiblePosts(posts.slice(0, newCount))
    setHasMore(posts.length > newCount)
  }

  return { visiblePosts, loading, error, hasMore, loadMorePosts }
}
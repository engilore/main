import { useState, useEffect } from 'react'
import { fetchUserPosts } from '../../services/blog/postService'
import { fetchDraftPosts } from '../../services/blog/postDraftService'


const useUserPosts = () => {
  const [publishedPosts, setPublishedPosts] = useState([])
  const [draftPosts, setDraftPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null) 

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const token = localStorage.getItem('authToken')
        if (!token) {
          setError('Auth token is missing')
          setLoading(false)
          return
        }

        const [publishedResponse, draftResponse] = await Promise.all([
          fetchUserPosts(token),
          fetchDraftPosts(token),
        ])

        setPublishedPosts(publishedResponse.data)
        setDraftPosts(draftResponse.data)
      } catch (error) {
        setError('Failed to fetch posts.')
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  return { publishedPosts, draftPosts, loading, error }
}

export default useUserPosts

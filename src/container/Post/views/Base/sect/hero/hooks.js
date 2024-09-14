import { useState, useEffect } from 'react'
import { fetchPosts } from '../../../../services/postService'
import { fetchDraftPosts } from '../../../../services/postDraftService'

const useFetchPosts = () => {
  const [publishedPosts, setPublishedPosts] = useState([])
  const [draftPosts, setDraftPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const token = localStorage.getItem('authToken')
        if (!token) {
          console.error('Auth token is missing')
          return
        }

        const [publishedResponse, draftResponse] = await Promise.all([
          fetchPosts(token),
          fetchDraftPosts(token),
        ])

        setPublishedPosts(publishedResponse.data)
        setDraftPosts(draftResponse.data)
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  return { publishedPosts, draftPosts, loading }
}

export default useFetchPosts
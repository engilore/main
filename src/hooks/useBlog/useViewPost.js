import { useState, useEffect } from 'react'
import { fetchPostById } from '../../services/blog/postService'
import { fetchDraftPostById } from '../../services/blog/postDraftService'


const useViewPost = (id, isDraft = false) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPost = async () => {
      const token = localStorage.getItem('authToken')

      try {
        const response = isDraft
          ? await fetchDraftPostById(token, id)
          : await fetchPostById(id)

        setPost(response.data)
      } catch (err) {
        setError('Failed to load post')
        console.error(`Error fetching post ${id}:`, err.message)
      } finally {
        setLoading(false)
      }
    }
    loadPost()
  }, [id, isDraft])

  return { post, loading, error }
}


export default useViewPost

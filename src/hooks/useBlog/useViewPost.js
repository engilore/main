import { useState, useEffect } from 'react'
import { fetchPostById } from '../../services/blog/postService'
import { fetchDraftPostById } from '../../services/blog/postDraftService'


const useViewPost = (id, isDraft = false) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    const loadPost = async () => {
      try {
        if (isDraft) {
          const draftPost = await fetchDraftPostById(token, id)
          setPost(draftPost)
        } else {
          const publishedPost = await fetchPostById(id)
          setPost(publishedPost)
        }
      } catch (err) {
        setError('Failed to load post')
      } finally {
        setLoading(false)
      }
    }
    loadPost()
  }, [id, isDraft])

  return { post, loading, error }
}

export default useViewPost

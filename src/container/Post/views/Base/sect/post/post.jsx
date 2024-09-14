import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { fetchPostById } from '../../../../services/postService'
import { fetchDraftPostById } from '../../../../services/postDraftService'
import PostDetail from '../../../../../../components/PostDetail/index'


const Post = () => {
  const { postId } = useParams()
  const { state } = useLocation()
  const isDraft = state?.isDraft || false
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const token = localStorage.getItem('authToken')
        const response = isDraft 
          ? await fetchDraftPostById(token, postId) 
          : await fetchPostById(postId)

        setPost(response)
      } catch (error) {
        console.error('Failed to fetch post details:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [postId, isDraft])

  if (loading) return <p>Loading post details...</p>
  if (!post) return <p>Post not found.</p>

  return <PostDetail post={post} isDraft={isDraft} />
}

export default Post

import { useState, useEffect } from 'react'
import { fetchPostTypes } from '../../services/blog/postService'


const usePostTypes = () => {
  const [postTypes, setPostTypes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadPostTypes = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const data = await fetchPostTypes()
      setPostTypes(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadPostTypes()
  }, [])

  return { postTypes, isLoading, error }
}

export default usePostTypes

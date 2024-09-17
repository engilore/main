import { useEffect, useState, useCallback, useRef } from 'react'


export const usePostForm = (initialFormData, topics, loadTopics, fetchPostById, id, token) => {
  const [formData, setFormData] = useState(initialFormData)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    const loadDraftPost = async () => {
      if (id && token) {
        setIsLoading(true)
        try {
          const response = await fetchPostById(token, id)
          const postData = response.data

          setFormData({
            title: postData.title || '',
            summary: postData.summary || '',
            content: postData.content || '',
            category: postData.category || [],
            topics: postData.topics || [],
            type: postData.type || '',
          })

          setIsLoading(false)
        } catch (err) {
          setError('Failed to load draft post')
          setIsLoading(false)
        }
      } else {
        setError('Missing post ID or authentication token')
        setIsLoading(false)
      }
    }

    loadDraftPost()
  }, [id, token, fetchPostById])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTopicChange = (topicId) => {
    const selectedTopic = topics.find((topic) => topic.id === topicId)
    setFormData((prev) => ({
      ...prev,
      topics: prev.topics.includes(selectedTopic.name)
        ? prev.topics.filter((name) => name !== selectedTopic.name)
        : [...prev.topics, selectedTopic.name],
    }))
  }

  useEffect(() => {
    if (formData.category.length > 0) {
      loadTopics(formData.category[0])
    }
  }, [formData.category, loadTopics])

  return { formData, isLoading, error, success, handleInputChange, handleTopicChange, setError, setSuccess, setIsLoading }
}


export const useAutoSave = ({ formData, saveFunction, delay = 2000, token, id }) => {
  const [isAutoSaving, setIsAutoSaving] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const previousFormData = useRef(formData)

  const debouncedAutoSave = useCallback(() => {
    if (isAutoSaving) return

    setIsAutoSaving(true)

    const updatedPostData = {
      ...formData,
      status: 'draft',
    }

    saveFunction(token, id, updatedPostData)
      .then(() => {
        setIsAutoSaving(false)
        setSuccess('Draft autosaved successfully')
        previousFormData.current = formData
      })
      .catch(() => {
        setIsAutoSaving(false)
        setError('Failed to autosave draft')
      })
  }, [formData, saveFunction, token, id, isAutoSaving])

  useEffect(() => {
    if (!formData) return

    const hasChanges = JSON.stringify(formData) !== JSON.stringify(previousFormData.current)

    if (hasChanges) {
      const handler = setTimeout(() => {
        debouncedAutoSave()
      }, delay)

      return () => clearTimeout(handler)
    }
  }, [formData, debouncedAutoSave, delay])

  return { isAutoSaving, success, error }
}
import { useState, useCallback } from 'react'
import { fetchTopics, createTopic, updateTopic, deleteTopic } from '../services/category/topicService'


export const useTopics = (token) => {
  const [topics, setTopics] = useState([])
  const [lastCategory, setLastCategory] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const loadTopics = useCallback(
    async (category) => {
      if (!category || isLoading || category === lastCategory) {
        return
      }
  
      setIsLoading(true)
      setError(null)
  
      const topicsChanged = (newTopics) => {
        if (newTopics.length !== topics.length) return true
        return newTopics.some((newTopic, index) => newTopic.id !== topics[index]?.id)
      }
  
      try {
        const fetchedTopics = await fetchTopics(category, token)
        if (topicsChanged(fetchedTopics)) {
          setTopics(fetchedTopics)
        }
        setLastCategory(category)
      } catch (error) {
        setError('Error fetching topics.')
      } finally {
        setIsLoading(false)
      }
    },
    [token, topics, isLoading, lastCategory]
  )

  const handleCreateOrUpdate = async (formState, isEditing) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      if (isEditing) {
        await updateTopic(token, formState.id, formState)
        setSuccess('Topic updated successfully.')
      } else {
        await createTopic(token, formState)
        setSuccess('Topic created successfully.')
      }

      await loadTopics(formState.category)
    } catch (error) {
      setError('Failed to save topic.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteTopic = async (id) => {
    setError(null)
    setSuccess(null)
    setIsLoading(true)

    try {
      await deleteTopic(token, id)
      setTopics((prevTopics) => prevTopics.filter((topic) => topic.id !== id))
      setSuccess('Topic deleted successfully.')
    } catch (error) {
      setError('Failed to delete topic.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    topics,
    error,
    success,
    isLoading,
    loadTopics,
    handleCreateOrUpdate,
    handleDeleteTopic,
  }
}

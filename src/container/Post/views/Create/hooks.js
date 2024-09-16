import { useState, useEffect } from 'react'


export const usePostForm = (initialFormData, topics, loadTopics) => {
  const [formData, setFormData] = useState(initialFormData)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTopicChange = (topicId) => {
    const selectedTopic = topics.find(topic => topic.id === topicId)
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

  return { formData, setFormData, handleInputChange, handleTopicChange }
}

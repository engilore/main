import { useState, useEffect } from 'react'
import { useAuth } from '../../../../../../contexts/authContexts'
import { fetchCategories } from '../../../../../../services/category/categoryService'
import { useTopics } from '../../../../../../hooks/useTopics'

import { TopicForm, TopicList } from './components/index'
import ErrorMessage from '../../../../../../components/ErrorMessage/index'
import SuccessMessage from '../../../../../../components/SuccessMessage/index'

import {
  Section,
  Contain,
  Header,
  FormContainer,
  TopicListContainer,
} from './topicStyle'


const Topic = () => {
  const { token } = useAuth()
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    meta_title: '',
    meta_description: '',
    category: null,
    id: null
  })
  const [isEditing, setIsEditing] = useState(false)
  const [categories, setCategories] = useState([])
  const { topics, error, success, isLoading, loadTopics, handleCreateOrUpdate, handleDeleteTopic } = useTopics(token)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories()
        setCategories(fetchedCategories)
      } catch (error) {
        console.error("Error fetching categories:", error)
      }
    }
    loadCategories()
  }, [])
  
  useEffect(() => {
    loadTopics()
  }, [loadTopics])
  
  useEffect(() => {
  }, [topics])
  

  const handleEdit = (topic) => {
    setIsEditing(true)
    setFormState({
      name: topic.name,
      description: topic.description,
      meta_title: topic.meta_title || '',
      meta_description: topic.meta_description || '',
      category: topic.category,
      id: topic.id
    })
  }

  const handleSubmit = (data) => {
    handleCreateOrUpdate({ ...formState, ...data }, isEditing)
      .then(() => {
        setFormState({
          name: '',
          description: '',
          meta_title: '',
          meta_description: '',
          category: null,
          id: null
        })
        setIsEditing(false)
      })
      .catch((error) => {
        console.error('Error handling form submission:', error)
      })
  }

  return (
    <Section>
      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}

      <Contain>
        <FormContainer>
          <Header>Manage Topics</Header>
          <TopicForm
            formState={formState}
            setFormState={setFormState}
            categories={categories}
            isEditing={isEditing}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </FormContainer>

        <TopicListContainer>
          <TopicList
            topics={topics}
            handleEdit={handleEdit}
            handleDelete={handleDeleteTopic}
          />
        </TopicListContainer>
      </Contain>
    </Section>
  )
}

export default Topic

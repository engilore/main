import { useState, useEffect } from 'react'
import useCreatePost from '../../../../hooks/useBlog/useCreatePost'
import { useCategories } from '../../../../hooks/useCategories'
import { useTopics } from '../../../../hooks/useTopics'
import useTypesPost from '../../../../hooks/useBlog/useTypesPost'

import ErrorMessage from '../../../../components/ErrorMessage'
import SuccessMessage from '../../../../components/SuccessMessage'
import Loading from '../../../../components/Loading'
import Button from '../../../../components/Button'

import { PostHeroSection, PostContentSection, PostCategorySection, PostTypeSection } from './sect'
import { Section, FlexContainer, FormWrapper } from './styles'


const CreatePost = () => {
  const token = localStorage.getItem('authToken')
  const { handleCreatePost, isLoading: postLoading, error, success } = useCreatePost(token)
  const { categories, isLoading: categoryLoading } = useCategories(token)
  const { topics, isLoading: topicLoading, loadTopics } = useTopics(token)
  const { postTypes, isLoading: postTypesLoading } = useTypesPost()

  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    category: [],
    topics: [],
    type: '',
    status: 'draft',
  })

  const isLoading = categoryLoading || topicLoading || postLoading || postTypesLoading

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

  const handleSubmit = (e) => {
    e.preventDefault()

    handleCreatePost({
      ...formData,
      category: formData.category,
      topics: formData.topics,
    })
  }

  return (
    <Section>
      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PostHeroSection formData={formData} handleInputChange={handleInputChange} />
          <FormWrapper onSubmit={handleSubmit}>
            <PostContentSection formData={formData} handleInputChange={handleInputChange} />
            <FlexContainer>
              <PostCategorySection
                formData={formData}
                categories={categories}
                topics={topics}
                isLoading={topicLoading}
                handleInputChange={handleInputChange}
                handleTopicChange={handleTopicChange}
                loadTopics={loadTopics}
              />
              <PostTypeSection
                formData={formData}
                postTypes={postTypes}
                handleInputChange={handleInputChange}
              />
            </FlexContainer>
            <Button
              text={postLoading ? 'Creating...' : 'Create Post'}
              size="base"
              shape="rounded"
              bgColor="var(--bg-primary)"
              textColor="var(--clr-white)"
              type="submit"
              disabled={postLoading}
            />
          </FormWrapper>
        </>
      )}
    </Section>
  )
}

export default CreatePost

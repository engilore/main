import { useEffect } from 'react'
import Select from '../../../../components/Select/index'
import Tag from '../../../../components/Tag/index'

import { Section, Contain, Content, Label, TagsWrapper, NoTopics } from './styles'


const PostCategory = ({ formData, categories, topics, isLoading, handleInputChange, handleTopicChange, loadTopics }) => {
  
  const handleCategoryChange = (e) => {
    const selectedValue = Number(e.target.value)
    const selectedCategory = categories.find(category => category.id === selectedValue)
    
    if (selectedCategory) {
      handleInputChange({
        target: {
          name: 'category',
          value: [selectedCategory.name],
        },
      })
    } else {
      console.error("Selected category not found")
    }
  }

  useEffect(() => {
    if (formData.category.length > 0 && !isLoading && topics.length === 0) {
      loadTopics(formData.category[0])
    }
  }, [formData.category, isLoading, loadTopics, topics.length])

  return (
    <Section>
      <Contain>
        <Content>
          <Label htmlFor="category">Select Category</Label>
          <Select
            name="category"
            value={formData.category[0] || ''}
            onChange={handleCategoryChange}
            options={categories.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />

          {isLoading ? (
            <p>Loading topics...</p>
          ) : formData.category.length > 0 && topics.length > 0 ? (
            <TagsWrapper>
              {topics.map((topic) => (
                <Tag
                  key={topic.id}
                  text={topic.name}
                  textColor='var(--clr-primary)'
                  outlined={true}
                  borderColor='var(--clr-primary)'
                  bgColor={formData.topics.includes(topic.name) ? 'var(--bg-light)' : 'var(--bg-white)'}
                  onClick={() => handleTopicChange(topic.id)}
                />
              ))}
            </TagsWrapper>
          ) : (
            <NoTopics>No topics available for this category</NoTopics>
          )}
        </Content>
      </Contain>
    </Section>
  )
}

export default PostCategory

import React from 'react'
import { Section, Contain, Content, TextInput, TextArea } from './postHeroStyle'


const PostHero = ({ formData, handleInputChange }) => (
  <Section>
    <Contain>
      <Content>
        <TextInput
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter post title"
          required
        />

        <TextArea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
          placeholder="Enter post summary"
          required
        />
      </Content>
    </Contain>
  </Section>
)

export default PostHero

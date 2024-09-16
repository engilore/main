import { Section, Contain, Content, TextArea } from './styles'


const PostContent = ({ formData, handleInputChange }) => (
  <Section>
    <Contain>
      <Content>
        <TextArea
          id="content"
          name="content"
          value={formData.content || ''} 
          onChange={handleInputChange}
          placeholder="Enter post content"
          required
        />
      </Content>
    </Contain>
  </Section>
)

export default PostContent

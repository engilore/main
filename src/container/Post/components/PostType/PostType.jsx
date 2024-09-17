import CustomSelect from '../../../../components/Select/index'

import { Section, Contain, Content, Label, NoPostTypes } from './styles'


const PostType = ({ formData, postTypes, handleInputChange }) => {

  const handlePostTypeChange = (e) => {
    handleInputChange({
      target: {
        name: 'type',
        value: e.target.value,
      },
    })
  }

  return (
    <Section>
      <Contain>
        <Content>
          <Label htmlFor="type">Post Type</Label>
          <CustomSelect
            name="type"
            value={formData.type}
            onChange={handlePostTypeChange}
            options={postTypes.map((type) => ({
              value: type.value,
              label: type.label,
            }))}
          />

          {postTypes.length === 0 && <NoPostTypes>No post types available</NoPostTypes>}
        </Content>
      </Contain>
    </Section>
  )
}

export default PostType

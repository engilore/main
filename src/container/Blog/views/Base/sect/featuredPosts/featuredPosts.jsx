import FeaturedPost from '../../../../components/Post/index'

import {
    Section,
    Contain,
    Header,
    Title,
} from './featuredPostsStyle'


const FeaturedPosts = () => {
  return (
    <Section>
      <Header>
        <Title>
        </Title>
      </Header>
      <Contain>
        <FeaturedPost />
      </Contain>
    </Section>
  )
}

export default FeaturedPosts

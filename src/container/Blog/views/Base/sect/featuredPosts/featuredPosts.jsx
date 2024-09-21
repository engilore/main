import PostList from '../../../../../../components/PostList/index'

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
      <PostList count={4} />
      </Contain>
    </Section>
  )
}

export default FeaturedPosts

import { PostsSection, CategorySection, TopicSection } from './sect/index'

import { BaseContainer } from './styles'


const Base = () => {
  return (
    <BaseContainer>
      <PostsSection />
      <CategorySection />
      <TopicSection />
    </ BaseContainer>
  )
}

export default Base
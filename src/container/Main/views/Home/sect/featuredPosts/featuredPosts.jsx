import PostList from '../../../../../../components/PostList/index'

import {
    Section,
    ArmsWrapper,
    ArmsTitle,
    CoatOfArms,
    Contain,
} from './featuredPostsStyle'

import badge from '../../../../../../assets/coat/badge.svg'


const FeaturedPosts = () => {
  return (
    <Section>
      <ArmsWrapper>
        <ArmsTitle>The Aegis of the Noble Will</ArmsTitle>
        <CoatOfArms src={badge} alt="Coat of Arms" />
      </ArmsWrapper>
      <Contain>
        <PostList count={4} />
      </Contain>
    </Section>
  )
}

export default FeaturedPosts

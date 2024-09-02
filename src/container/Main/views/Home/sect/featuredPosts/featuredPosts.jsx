import FeaturedPost from '../../../../../Blog/components/Post/index'

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
        <FeaturedPost count={4} />
      </Contain>
    </Section>
  );
};

export default FeaturedPosts;

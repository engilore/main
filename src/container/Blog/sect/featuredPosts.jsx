import FeaturedPost from '../../Blog/constants/FeaturedPost/index'

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
        <FeaturedPost count={3} />
      </Contain>
    </Section>
  );
};

export default FeaturedPosts

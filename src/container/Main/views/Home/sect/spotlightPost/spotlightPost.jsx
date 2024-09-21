import { useFetchPosts } from '../../../../../../hooks/useBlog/useFetchPosts'
import Tag from '../../../../../../components/Tag/index'
import Load from '../../../../../../components/Load/index'

import {
  Section,
  Post,
  Contain,
  Title,
  Intro,
  PostMeta,
  PostDate,
  PostType,
  Header,
  TagPills,
  NoPostsMessage
} from './spotlightPostStyle'


const SpotlightPost = () => {
  const { posts, loading, error } = useFetchPosts() 

  if (loading) return <Load />
  if (error) return <p>{error}</p>

  const featuredPost = posts.length > 0 ? posts[0] : null

  if (!featuredPost) return (
    <Section $centered>
      <NoPostsMessage>No posts found.</NoPostsMessage>
    </Section>
  )

  return (
    <Section>
      <Header>In the Spotlight :</Header>
      <Post to={`/post/${featuredPost.id}`}>
        <Contain>
          <Title>{featuredPost.title}</Title>
          <PostMeta>
            <PostType>
              {Array.isArray(featuredPost.type) ? (
                featuredPost.type.map((type, index) => (
                  <span key={index}>{type}</span>
                ))
              ) : (
                <span>{featuredPost.type}</span>
              )}
            </PostType>
            <PostDate>
              {new Date(featuredPost.published_at).toLocaleDateString()}
            </PostDate>
          </PostMeta>
          <Intro>{featuredPost.summary}</Intro>
          <TagPills>
            {featuredPost.topics && featuredPost.topics.length > 0 && (
              featuredPost.topics.map(tag => (
                <Tag
                  key={tag}
                  text={tag}
                  textColor="var(--clr-white)"
                  bgColor="var(--bg-primary)"
                  outlined={false}
                />
              ))
            )}
          </TagPills>
        </Contain>
      </Post>
    </Section>
  )
}

export default SpotlightPost

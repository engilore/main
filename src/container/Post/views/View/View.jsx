import { useParams } from 'react-router-dom'
import useViewPost from '../../../../hooks/useBlog/useViewPost'
import Loading from '../../../../components/Loading/index'
import Tag from '../../../../components/Tag'
import ErrorMessage from '../../../../components/ErrorMessage'

import { 
  Section,
  Contain,
  Content,
  Hero,
  HeroWrapper,
  Type,
  Title,
  Summary,
  Text,
  DateText,
  AuthorText,
  MetadataWrapper,
  TagsWrapper
} from './styles'

const View = ({ isDraft = false }) => {
  const { id } = useParams()
  const { post = {}, loading, error } = useViewPost(id, isDraft)

  if (loading) return <Loading />
  
  if (error) return <ErrorMessage>{error === 'Post not found' ? 'This post does not exist.' : error}</ErrorMessage>

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const publishedDate = post.created_at ? formatDate(post.created_at) : 'Unknown Date'

  return (
    <Section>
      <Hero>
        <HeroWrapper>
          <Type>{post.type || 'Unknown Type'}</Type>
          <Title>{post.title || 'Untitled'}</Title>
          <Summary>{post.summary || 'No summary available.'}</Summary>
        </HeroWrapper>
      </Hero>

      <Contain>
        <TagsWrapper>
          {post.topics && post.topics.length > 0 ? (
            post.topics.map((topic, index) => (
              <Tag
                key={index}
                text={topic}
                textColor="var(--clr-secondary)"
                bgColor="var(--bg-light)"
                outlined={true}
                borderColor="var(--bg-light)"
              />
            ))
          ) : (
            <p>No topics available.</p>
          )}
        </TagsWrapper>

        <MetadataWrapper>
          {post.author ? (
            <AuthorText>
              By {`${post.author.first_name} ${post.author.last_name}`}
            </AuthorText>
          ) : (
            <AuthorText>Author unknown</AuthorText>
          )}
          <DateText>{publishedDate}</DateText>
        </MetadataWrapper>

        <Content>
          {post.content ? (
            <Text>{post.content}</Text>
          ) : (
            <Text>No content available.</Text>
          )}
        </Content>
      </Contain>
    </Section>
  )
}

export default View

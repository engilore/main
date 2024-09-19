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

  const publishedDate = post.created_at ? formatDate(post.created_at) : ''

  return (
    <Section>
      <Hero>
        <HeroWrapper>
          {post.type && <Type>{post.type}</Type>}
          {post.title && <Title>{post.title}</Title>}
          {post.summary && <Summary>{post.summary}</Summary>}
        </HeroWrapper>

        <MetadataWrapper>
          {post.author && (
            <AuthorText>
              {`${post.author.first_name} ${post.author.last_name}`}
            </AuthorText>
          )}
          {publishedDate && <DateText>{publishedDate}</DateText>}
        </MetadataWrapper>
      </Hero>

      <Contain>
        {post.topics && post.topics.length > 0 && (
          <TagsWrapper>
            {post.topics.map((topic, index) => (
              <Tag
                key={index}
                text={topic}
                textColor="var(--clr-white)"
                bgColor="var(--bg-primary-light)"
                outlined={true}
                borderColor="var(--bg-primary)"
              />
            ))}
          </TagsWrapper>
        )}

        <Content>
          {post.content && <Text>{post.content}</Text>}
        </Content>
      </Contain>
    </Section>
  )
}

export default View

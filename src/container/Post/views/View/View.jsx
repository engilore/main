import { useParams } from 'react-router-dom'
import useViewPost from '../../../../hooks/useBlog/useViewPost'

import Loading from '../../../../components/Loading/index'
import Tag from '../../../../components/Tag'

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
  const { post = {}, loading } = useViewPost(id, isDraft)

  if (loading) return <Loading />

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const publishedDate = post.created_at ? formatDate(post.created_at) : ''

  return (
    <Section>
      <Hero>
        <HeroWrapper>
          <Type>{post.type}</Type>
          <Title>{post.title}</Title>
          <Summary>{post.summary}</Summary>
        </HeroWrapper>
      </Hero>

      <Contain>
        <TagsWrapper>
          {post.topics?.map((topic, index) => (
            <Tag
              key={index}
              text={topic}
              textColor="var(--clr-secondary)"
              bgColor="var(--bg-light)"
              outlined={true}
              borderColor="var(--bg-light)"
            />
          ))}
        </TagsWrapper>

        <MetadataWrapper>
          {post.author && (
            <AuthorText>
              By {`${post.author.first_name} ${post.author.last_name}`}
            </AuthorText>
          )}
          {publishedDate && <DateText>{publishedDate}</DateText>}
        </MetadataWrapper>

        <Content>
          <Text>{post.content}</Text>
        </Content>
      </Contain>
    </Section>
  )
}

export default View

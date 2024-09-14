import PropTypes from 'prop-types'
import Tag from '../Tag/index'

import { PostContainer, PostTitle, PostContent, PostMeta, PostCategory, PostTopics, PostType, MetaWrapper } from './styles'


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, options)
}

const PostDetail = ({ post, isDraft }) => {
  if (!post || !post.data) {
    return <p>No post selected.</p>
  }

  const postData = post.data

  return (
    <PostContainer>
      <PostType>{postData.type}</PostType>
      
      <PostTitle>{postData.title || 'Untitled Post'}</PostTitle>

      <MetaWrapper>
        <PostMeta>
          {isDraft 
            ? `Created on: ${postData.created_at ? formatDate(postData.created_at) : 'N/A'}` 
            : `Published on: ${postData.published_at ? formatDate(postData.published_at) : 'N/A'}`}
        </PostMeta>
        {isDraft && postData.updated_at && (
          <PostMeta>Updated on: {formatDate(postData.updated_at)}</PostMeta>
        )}
      </MetaWrapper>

      <PostCategory>{postData.category?.length ? postData.category.join(', ') : 'No category'}</PostCategory>

      {postData.topics?.length > 0 && (
        <PostTopics>
          {postData.topics.map((topic) => (
            <Tag
              key={topic}
              text={topic}
              bgColor="var(--bg-light)"
              textColor="var(--clr-primary)"
              borderColor="var(--clr-primary)"
              hoverBgColor="var(--clr-primary)"
              hoverTextColor="var(--bg-white)"
              to={`/topics/${topic}`}
            />
          ))}
        </PostTopics>
      )}

      <PostContent>{postData.content || 'No content available'}</PostContent>
    </PostContainer>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  isDraft: PropTypes.bool.isRequired,
}

export default PostDetail
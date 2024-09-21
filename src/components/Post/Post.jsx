import { Link } from 'react-router-dom'
import Tag from '../Tag/index'

import {
  PostContainer,
  Title,
  PostMeta,
  PostType,
  PostDate,
  TagPills,
  Author
} from './styles'


const Post = ({ post }) => {
  const formattedDate = post?.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) : 'Unknown date'

  return (
    <PostContainer as={Link} to={`/post/${post?.id}`}>
      <PostType>
        {Array.isArray(post?.type) ? (
          post.type.map((type, idx) => <span key={`${type}-${idx}`}>{type}</span>)
        ) : (
          <span>{post?.type || 'Unknown type'}</span>
        )}
      </PostType>
      <Title>{post?.title || 'Untitled'}</Title>
      <Author>- {post?.author?.first_name || 'Unknown'} {post?.author?.last_name || ''}</Author>
      <PostMeta>
        <PostDate>{formattedDate}</PostDate>
      </PostMeta>
      {post?.topics?.length > 0 && (
        <TagPills>
          {post.topics.map((tag, idx) => (
            <Tag
              key={`${tag}-${idx}`}
              text={tag}
              textColor="var(--clr-secondary)"
              bgColor="var(--bg-light)"
              outlined
              borderColor="var(--bg-light)"
            />
          ))}
        </TagPills>
      )}
    </PostContainer>
  )
}

export default Post

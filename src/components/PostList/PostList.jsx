import ListItem from '../../components/ListItem/index'

import { ListWrapper, ListHeader, Content, Container } from './styles'


const PostList = ({ posts, title, isDraft, handleView }) => (
  <Container>
    <ListHeader>{title}</ListHeader>
    <ListWrapper>
      <Content>
        {posts.length ? (
          posts.map((post) => (
            <ListItem
              key={post.id}
              fields={[
                { label: 'Title', value: post.title },
                { label: isDraft ? 'Created' : 'Published', value: isDraft ? post.created_at : post.published_at },
                { label: 'Type', value: post.type },
                { label: 'Category', value: post.category?.join(', ') || 'No category' },
              ]}
              actions={[
                {
                  label: 'View',
                  onClick: () => handleView(post.id, isDraft),
                },
              ]}
            />
          ))
        ) : (
          <p>No {isDraft ? 'drafts' : 'published posts'} found.</p>
        )}
      </Content>
    </ListWrapper>
  </Container>
)

export default PostList

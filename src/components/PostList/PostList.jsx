import { 
  ListWrapper,
  ListHeader,
  Content,
  Container,
  NoPostsMessage,
  PostItem,
  Title,
  Status,
  DateInfo,
  HeaderContainer,
  HeaderTitle,
  HeaderInfo
} from './styles'


const PostList = ({ posts, title, isDraft, handleView }) => (
  <Container>
    <ListHeader>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderContainer>
        <HeaderInfo>
          <span>Title</span>
          <span>Status</span>
          <span>Last Updated</span>
        </HeaderInfo>
      </HeaderContainer>
    </ListHeader>
    <ListWrapper>
      <Content>
        {posts.length ? (
          posts.map((post) => (
            <PostItem key={post.id} onClick={() => handleView(post.id, isDraft)}>
              <Title>{post.title}</Title>
              <Status>{isDraft ? 'draft' : post.status}</Status>
              <DateInfo>{new Date(post.updated_at).toLocaleDateString()}</DateInfo>
            </PostItem>
          ))
        ) : (
          <NoPostsMessage>No {isDraft ? 'drafts' : 'published posts'} found.</NoPostsMessage>
        )}
      </Content>
    </ListWrapper>
  </Container>
)

export default PostList

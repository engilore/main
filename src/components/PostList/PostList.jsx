import Button from '../Button/index'
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


const PostList = ({ posts, title, isDraft, handleView, handleDelete, lastPostElementRef }) => {
  return (
    <Container>
      <ListHeader>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderContainer>
          <HeaderInfo>
            <span>Title</span>
            <span>Status</span>
            <span>{isDraft ? 'Last Updated' : 'Published On'}</span>
          </HeaderInfo>
        </HeaderContainer>
      </ListHeader>
      <ListWrapper>
        <Content>
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post, index) => {
              const isLastPost = posts.length === index + 1
              return (
                <PostItem 
                  ref={isLastPost ? lastPostElementRef : null} 
                  key={post.id}
                  onClick={() => handleView(post.id, isDraft)}
                >
                  <Title>{post.title}</Title>
                  <Status>{isDraft ? 'Draft' : post.status || 'Published'}</Status>
                  <DateInfo>
                    {isDraft && post.updated_at ? (
                      new Date(post.updated_at).toLocaleString()
                    ) : post.published_at && (
                      new Date(post.published_at).toLocaleString()
                    )}
                  </DateInfo>
                  {!isDraft && (
                    <Button 
                      text="Delete"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDelete(post.id)
                      }}
                      bgColor="var(--clr-danger)"
                      hoverColor="darkred"
                      textColor="white"
                      size="small"
                      allowedRoles={['admin']}
                    />
                  )}
                </PostItem>
              )
            })
          ) : (
            <NoPostsMessage>No {isDraft ? 'drafts' : 'published posts'} found.</NoPostsMessage>
          )}
        </Content>
      </ListWrapper>
    </Container>
  )
}

export default PostList

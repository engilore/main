import { useState, useEffect } from 'react'
import { useToggleFeaturePost } from '../../hooks/useBlog/useToggleFeaturePost'
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
  HeaderInfo,
  ButtonWrapper
} from './styles'


const PostManageList = ({ posts, title, isDraft, handleView, handleDelete, lastPostElementRef }) => {
  const { toggleFeature, loading } = useToggleFeaturePost()
  const [localPosts, setLocalPosts] = useState(posts)

  useEffect(() => {
    setLocalPosts(posts)
  }, [posts])

  const handleToggleFeature = async (postId) => {
    setLocalPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, is_featured: true }
        }
        return { ...post, is_featured: false }
      })
    )

    try {
      await toggleFeature(postId)
    } catch (err) {
      setLocalPosts(posts)
    }
  }

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
          {Array.isArray(localPosts) && localPosts.length > 0 ? (
            localPosts.map((post, index) => {
              const isLastPost = localPosts.length === index + 1
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
                    <ButtonWrapper>
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
                      <Button
                        text={post.is_featured ? 'Unfeature' : 'Feature'}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleToggleFeature(post.id)
                        }}
                        bgColor="var(--bg-premium)"
                        textColor="white"
                        size="small"
                        allowedRoles={['admin']}
                        disabled={loading}
                      />
                    </ButtonWrapper>
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

export default PostManageList

import { useNavigate } from 'react-router-dom'
import useCreatePost from '../../../../hooks/useBlog/useCreatePost'
import useTypesPost from '../../../../hooks/useBlog/useTypesPost'
import { useCategories } from '../../../../hooks/useCategories'
import { useTopics } from '../../../../hooks/useTopics'
import { usePostForm } from './hooks'

import Nav from '../../../../components/Nav'
import ErrorMessage from '../../../../components/ErrorMessage/index'
import SuccessMessage from '../../../../components/SuccessMessage/index'
import Loading from '../../../../components/Loading/index'
import Button from '../../../../components/Button/index'

import { PostHero, PostContent, PostCategory, PostType } from '../../components/index'

import { Section, FlexContainer, FormWrapper } from './styles'
import { FaArrowLeft } from 'react-icons/fa'


const CreatePost = () => {
  const token = localStorage.getItem('authToken')
  const { handleCreatePost, isLoading: postLoading, error, success } = useCreatePost(token)
  const { categories, isLoading: categoryLoading } = useCategories(token)
  const { topics, isLoading: topicLoading, loadTopics } = useTopics(token)
  const { postTypes, isLoading: postTypesLoading } = useTypesPost()

  const { formData, handleInputChange, handleTopicChange } = usePostForm({
    title: '',
    summary: '',
    content: '',
    category: [],
    topics: [],
    type: '',
  }, topics, loadTopics)

  const isLoading = categoryLoading || topicLoading || postLoading || postTypesLoading

  const navigate = useNavigate()

  const handleSubmit = async (e, status) => {
    e.preventDefault()
    const postData = {
      ...formData,
      status,
    }
  
    await handleCreatePost(postData)
  
    if (status === 'draft' || status === 'published') {
      navigate('/hub')
    }
  }

  return (
    <Section>
      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PostHero formData={formData} handleInputChange={handleInputChange} />

          <Nav
            leftContent={
              <Button
                text="Back to Hub"
                size="large"
                shape="rounded"
                bgColor="var(--bg-light)"
                textColor="var(--clr-primary)"
                icon={<FaArrowLeft />}
                to="/hub"
              />
            }
            centerContent={null}
            rightContent={
              <>
                <Button
                  text="Save Draft"
                  size="large"
                  shape="rounded"
                  bgColor="var(--bg-light)"
                  textColor="var(--clr-primary)"
                  onClick={(e) => handleSubmit(e, 'draft')}
                  disabled={postLoading}
                />
                <Button
                  text="Publish"
                  size="large"
                  shape="rounded"
                  bgColor="var(--bg-primary)"
                  textColor="var(--clr-white)"
                  onClick={(e) => handleSubmit(e, 'published')}
                  disabled={postLoading}
                />
              </>
            }
            bgColor="var(--bg-white)"
          />

          <FormWrapper>
            <FlexContainer>
              <PostCategory
                formData={formData}
                categories={categories}
                topics={topics}
                isLoading={topicLoading}
                handleInputChange={handleInputChange}
                handleTopicChange={handleTopicChange}
                loadTopics={loadTopics}
              />
              <PostType
                formData={formData}
                postTypes={postTypes}
                handleInputChange={handleInputChange}
              />
            </FlexContainer>

            <PostContent formData={formData} handleInputChange={handleInputChange} />
          </FormWrapper>
        </>
      )}
    </Section>
  )
}

export default CreatePost

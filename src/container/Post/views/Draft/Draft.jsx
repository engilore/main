import { useNavigate, useParams } from 'react-router-dom'
import { fetchDraftPostById, updateDraftPost, deleteDraftPost } from '../../../../services/blog/postDraftService'
import { useCategories } from '../../../../hooks/useCategories'
import { useTopics } from '../../../../hooks/useTopics'
import useTypesPost from '../../../../hooks/useBlog/useTypesPost'
import { usePostForm, useAutoSave } from './hooks' 

import Nav from '../../../../components/Nav/index'
import Button from '../../../../components/Button/index'
import ErrorMessage from '../../../../components/ErrorMessage/index'
import SuccessMessage from '../../../../components/SuccessMessage/index'
import Loading from '../../../../components/Loading/index'
import { PostHero, PostContent, PostCategory, PostType } from '../../components'

import { Section, FlexContainer, FormWrapper, AutoSave, AutoSaveIconSaving, AutoSaveIconSaved } from './styles'
import { FaArrowLeft } from 'react-icons/fa'
import { RiQuillPenFill } from 'react-icons/ri'


const Draft = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem('authToken')

  const { categories, isLoading: categoryLoading } = useCategories(token)
  const { topics, isLoading: topicLoading, loadTopics } = useTopics(token)
  const { postTypes, isLoading: postTypesLoading } = useTypesPost()

  const { formData, isLoading, error, success, handleInputChange, handleTopicChange, setError, setSuccess, setIsLoading } = usePostForm(
    {
      title: '',
      summary: '',
      content: '',
      category: [],
      topics: [],
      type: '',
    },
    topics,
    loadTopics,
    fetchDraftPostById,
    id,
    token
  )

  const { isAutoSaving } = useAutoSave({
    formData,
    saveFunction: updateDraftPost,
    delay: 2000,
    token,
    id
  })

  const handleSubmit = async (e, status) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setIsLoading(true)

    const updatedPostData = {
      ...formData,
      status,
    }

    try {
      await updateDraftPost(token, id, updatedPostData)
      setSuccess(status === 'published' ? 'Draft published successfully' : 'Draft updated successfully')

      if (status === 'published') {
        navigate('/hub')
      }

      setIsLoading(false)
    } catch (err) {
      setError('Failed to update draft')
      setIsLoading(false)
    }
  }

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      await deleteDraftPost(token, id)
      navigate('/hub')
    } catch (err) {
      setError('Failed to delete draft')
      setIsLoading(false)
    }
  }

  const handleBackToHub = async () => {
    try {
      setIsLoading(true)
      const updatedPostData = {
        ...formData,
        status: 'draft',
      }
      await updateDraftPost(token, id, updatedPostData)
      navigate('/hub')
    } catch (err) {
      setError('Failed to save draft before navigating')
      setIsLoading(false)
    }
  }

  if (isLoading || categoryLoading || topicLoading || postTypesLoading) return <Loading />

  return (
    <Section>
      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}

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
            onClick={handleBackToHub}
          />
        }
        centerContent={
          isAutoSaving ? (
            <AutoSave isSaving>
              <AutoSaveIconSaving />
              <span>Autosaving...</span>
            </AutoSave>
          ) : (
            <AutoSave>
              <AutoSaveIconSaved />
              <span>All changes saved</span>
            </AutoSave>
          )
        }
        rightContent={
          <>
            <Button
              text="Delete"
              size="large"
              shape="rounded"
              bgColor="var(--clr-danger)"
              textColor="var(--clr-white)"
              onClick={handleDelete}
              disabled={isLoading}
            />
            <Button
              text="Publish"
              size="large"
              shape="rounded"
              bgColor="var(--bg-primary)"
              textColor="var(--clr-white)"
              iconRight={true}
              icon={<RiQuillPenFill />}
              onClick={(e) => handleSubmit(e, 'published')}
              disabled={isLoading}
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
    </Section>
  )
}

export default Draft

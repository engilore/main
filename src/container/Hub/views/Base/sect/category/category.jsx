import React, { useState } from 'react'
import { useAuth } from '../../../../../../contexts/authContexts'
import { useCategories } from '../../../../../../hooks/useCategories'
import { CategoryForm, CategoryList } from './components/index'
import ErrorMessage from '../../../../../../components/ErrorMessage/index'
import SuccessMessage from '../../../../../../components/SuccessMessage/index'

import {
  Section,
  Contain,
  Header,
  FormContainer,
  CategoryListContainer,
} from './categoryStyle'


const Category = () => {
  const { token } = useAuth()
  const [formState, setFormState] = useState({
    name: '', description: '', meta_title: '', meta_description: '', slug: '', id: null
  })
  const [isEditing, setIsEditing] = useState(false)
  const {
    categories, error, success, isLoading, handleCreateOrUpdate, handleDeleteCategory
  } = useCategories(token)

  const handleEdit = (category) => {
    setIsEditing(true)
    setFormState({
      name: category.name,
      description: category.description,
      meta_title: category.meta_title || '',
      meta_description: category.meta_description || '',
      slug: category.slug || '',
      id: category.id
    })
  }

  const handleSubmit = (data) => {
    handleCreateOrUpdate({ ...formState, ...data }, isEditing)
    setFormState({
      name: '', description: '', meta_title: '', meta_description: '', slug: '', id: null
    })
    setIsEditing(false)
  }

  return (
    <Section>
      {error && <ErrorMessage message={error} />}
      {success && <SuccessMessage message={success} />}
      <Contain>
        <FormContainer>
          <Header>Manage Categories</Header>

          <CategoryForm
            formState={formState}
            isEditing={isEditing}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </FormContainer>

        <CategoryListContainer>
          <CategoryList
            categories={categories}
            handleEdit={handleEdit}
            handleDelete={handleDeleteCategory}
          />
        </CategoryListContainer>
      </Contain>
    </Section>
  )
}

export default Category

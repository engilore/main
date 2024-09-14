import { useState, useEffect } from 'react'
import { fetchCategories, createCategory, updateCategory, deleteCategory } from '../services/category/categoryService'


export const useCategories = (token) => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const fetchedCategories = await fetchCategories()
      setCategories(fetchedCategories)
    } catch (error) {
      setError('Error fetching categories.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateOrUpdate = async (formState, isEditing) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      if (isEditing) {
        await updateCategory(token, formState.id, formState)
        setSuccess('Category updated successfully.')
      } else {
        await createCategory(token, formState)
        setSuccess('Category created successfully.')
      }
      loadCategories()
    } catch (error) {
      setError('Failed to save category.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteCategory = async (id) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    try {
      await deleteCategory(token, id)
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== id)
      )
      setSuccess('Category deleted successfully.')
    } catch (error) {
      setError('Failed to delete category.')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    categories,
    error,
    success,
    isLoading,
    handleCreateOrUpdate,
    handleDeleteCategory,
  }
}

import { baseUrl } from '../api'
import {
    categoryUrl, categoryCreateUrl, categoryDetailUrl, categoryUpdateUrl, categoryDeleteUrl,
} from '../urls'


export const fetchCategories = async () => {
    const apiUrl = `${baseUrl}${categoryUrl}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to fetch categories: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error('Error fetching categories:', error.message)
      throw error
    }
  }
  
  
  export const fetchCategoryById = async (id) => {
    const apiUrl = `${baseUrl}${categoryDetailUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to fetch category: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error fetching category ${id}:`, error.message)
      throw error
    }
  }
  
  
  export const createCategory = async (token, categoryData) => {
    const apiUrl = `${baseUrl}${categoryCreateUrl}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to create category: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error('Error creating category:', error.message)
      throw error
    }
  }
  
  export const updateCategory = async (token, id, updatedCategoryData) => {
    const apiUrl = `${baseUrl}${categoryUpdateUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCategoryData),
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to update category: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error updating category ${id}:`, error.message)
      throw error
    }
  }
  
  
  export const deleteCategory = async (token, id) => {
    const apiUrl = `${baseUrl}${categoryDeleteUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      })
  
      if (response.status === 204) {
        return { success: true }
      }
  
      const data = await response.json()
  
      if (!response.ok) {
        throw new Error(`Deletion failed: ${response.status} ${data.message || data.error || 'Unknown error'}`)
      }
  
      return data
    } catch (error) {
      console.error('Delete Category Error:', error.message)
      throw error
    }
  }
  
  
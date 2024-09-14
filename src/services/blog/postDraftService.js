import { baseUrl } from '../api'
import {
    postDraftUrl, postDraftDetailUrl, postDraftUpdateUrl, postDraftDeleteUrl
} from '../../container/Post/urls'


export const fetchDraftPosts = async (token) => {
  const apiUrl = `${baseUrl}${postDraftUrl}`
  
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch draft posts: ${response.status}`)
  }

  return await response.json()
}

export const fetchDraftPostById = async (token, id) => {
  const apiUrl = `${baseUrl}${postDraftDetailUrl(id)}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errMessage = await response.text()
      throw new Error(`Failed to fetch draft post: ${response.status} ${errMessage}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching draft post ${id}:`, error.message)
    throw error
  }
}



export const updateDraftPost = async (token, id, updatedDraftPostData) => {
  const apiUrl = `${baseUrl}${postDraftUpdateUrl(id)}`

  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDraftPostData),
    })

    if (!response.ok) {
      const errMessage = await response.text()
      throw new Error(`Failed to update draft post: ${response.status} ${errMessage}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error updating draft post ${id}:`, error.message)
    throw error
  }
}

export const deleteDraftPost = async (token, id) => {
  const apiUrl = `${baseUrl}${postDraftDeleteUrl(id)}`

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
      throw new Error(`Failed to delete draft post: ${response.status} ${data.message || 'Unknown error'}`)
    }

    return data
  } catch (error) {
    console.error('Error deleting draft post:', error.message)
    throw error
  }
}

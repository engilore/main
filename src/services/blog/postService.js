import { baseUrl } from '../api'
import {
    postUrl, postTypesUrl, postCreateUrl, postDetailUrl, postUpdateUrl, postDeleteUrl, userPostUrl
} from '../urls'


export const fetchPosts = async (page = 1, limit = 10) => {
  const apiUrl = `${baseUrl}${postUrl}?page=${page}&page_size=${limit}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errMessage = await response.text()
      throw new Error(`Failed to fetch posts: ${response.status} ${errMessage}`)
    }

    const data = await response.json()

    if (data.results && typeof data.count === 'number') {
      return { data: data.results, total: data.count }
    } else {
      throw new Error('Unexpected response format')
    }
  } catch (error) {
    console.error('Error while fetching posts:', error.message)
    throw error
  }
}

export const fetchUserPosts = async (token) => {
  const apiUrl = `${baseUrl}${userPostUrl}`

  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch user posts: ${response.status}`)
  }

  return await response.json()
}

export const fetchPostById = async (id) => {
  const apiUrl = `${baseUrl}${postDetailUrl(id)}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errMessage = await response.text()
      if (response.status === 404) {
        throw new Error(`Post not found: ${response.status} ${errMessage}`)
      }
      throw new Error(`Failed to fetch post: ${response.status} ${errMessage}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error.message)
    throw error
  }
}

export const createPost = async (token, postData) => {
  const apiUrl = `${baseUrl}${postCreateUrl}`

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })

    if (!response.ok) {
      const errMessage = await response.text()
      throw new Error(`Failed to create post: ${response.status} ${errMessage}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error creating post:', error.message)
    throw error
  }
}

export const updatePost = async (token, id, updatedPostData) => {
  const apiUrl = `${baseUrl}${postUpdateUrl(id)}`

  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPostData),
    })

    if (!response.ok) {
      const errMessage = await response.text()
      throw new Error(`Failed to update post: ${response.status} ${errMessage}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error updating post ${id}:`, error.message)
    throw error
  }
}

export const deletePost = async (token, id) => {
  const apiUrl = `${baseUrl}${postDeleteUrl(id)}`

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

    let data
    try {
      data = await response.json()
    } catch (error) {
      throw new Error(`Deletion failed: ${response.status} - Unable to parse response`)
    }

    if (!response.ok) {
      throw new Error(`Deletion failed: ${response.status} ${data.message || data.error || 'Unknown error'}`)
    }

    return data
  } catch (error) {
    throw error
  }
}

export const fetchPostTypes = async () => {
  const apiUrl = `${baseUrl}${postTypesUrl}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errMessage = await response.text()
      throw new Error(`Failed to fetch post types: ${response.status} ${errMessage}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching post types:', error.message)
    throw error
  }
}

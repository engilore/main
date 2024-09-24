import { baseUrl } from '../api'
import { featuredPostUrl, toggleFeatureUrl} from '../urls'


export const fetchFeaturedPost = async () => {
    const apiUrl = `${baseUrl}${featuredPostUrl}` 
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to fetch featured post: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error('Error fetching featured post:', error.message)
      throw error
    }
  }
  
  
  export const toggleFeaturePost = async (token, id) => {
    const apiUrl = `${baseUrl}${toggleFeatureUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to toggle feature status: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error toggling feature status for post ${id}:`, error.message)
      throw error
    }
  }
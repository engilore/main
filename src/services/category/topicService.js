import { baseUrl } from '../api'
import {
    topicUrl, topicCreateUrl, topicDetailUrl, topicUpdateUrl, topicDeleteUrl
} from '../../container/Hub/urls'


export const fetchTopics = async () => {
    const apiUrl = `${baseUrl}${topicUrl}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to fetch topics: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error('Error fetching topics:', error.message)
      throw error
    }
  }
  
  
  export const fetchTopicById = async (id) => {
    const apiUrl = `${baseUrl}${topicDetailUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to fetch topic: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error fetching topic ${id}:`, error.message)
      throw error
    }
  }
  
  
  export const createTopic = async (token, topicData) => {
    const apiUrl = `${baseUrl}${topicCreateUrl}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(topicData),
      });
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to create topic: ${response.status} ${errMessage}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error creating topic:', error.message);
      throw error;
    }
  };
  
  
  
  export const updateTopic = async (token, id, updatedTopicData) => {
    const apiUrl = `${baseUrl}${topicUpdateUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTopicData),
      })
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to update topic: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error updating topic ${id}:`, error.message)
      throw error
    }
  }
  
  
  export const deleteTopic = async (token, id) => {
    const apiUrl = `${baseUrl}${topicDeleteUrl(id)}`
  
    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${token}`,
        },
      })
  
      if (response.status === 204) {
        return { success: true }
      }
  
      if (!response.ok) {
        const errMessage = await response.text()
        throw new Error(`Failed to delete topic: ${response.status} ${errMessage}`)
      }
  
      return await response.json()
    } catch (error) {
      console.error(`Error deleting topic ${id}:`, error.message)
      throw error
    }
  }
  
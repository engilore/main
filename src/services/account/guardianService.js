import { baseUrl } from '../api'
import { guardiansUrl } from '../urls'


export const fetchGuardians = async () => {
  const apiUrl = `${baseUrl}${guardiansUrl}`

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorMessage = await response.text()
      throw new Error(`Failed to fetch guardians: ${response.status} ${errorMessage}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching guardians:', error.message)
    throw error
  }
}

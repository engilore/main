import { useState, useEffect } from 'react'
import { fetchGuardians } from '../services/guardianService'


export const useGuardians = () => {
  const [guardians, setGuardians] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getGuardians = async () => {
      try {
        const data = await fetchGuardians()
        setGuardians(data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getGuardians()
  }, [])

  return { guardians, loading, error }
}

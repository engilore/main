import { useGuardians } from '../../hooks/useAccount/useGuardians'
import Loading from '../Loading/index'
import ErrorMessage from '../ErrorMessage/index'

import { CardContainer, Card, CardTitle, CardContent } from './styles'


const GuardianProfileCard = () => {
  const { guardians, loading, error } = useGuardians()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} />

  return (
    <CardContainer>
      {guardians.map((guardian) => (
        <Card key={guardian.username}>
          <CardTitle>{guardian.first_name} {guardian.last_name}</CardTitle>
          <CardContent>
            <p>Username: {guardian.username}</p>
            <p>Email: {guardian.email}</p>
          </CardContent>
        </Card>
      ))}
    </CardContainer>
  )
}

export default GuardianProfileCard

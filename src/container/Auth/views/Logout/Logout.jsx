import useLogout from '../../../../hooks/useAuth/useLogout'
import Loading from '../../../../components/Loading'


const Logout = () => {
  const { isLoggingOut } = useLogout()

  return isLoggingOut ? <Loading /> : null
}

export default Logout

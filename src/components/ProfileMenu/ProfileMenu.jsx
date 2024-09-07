import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../container/Auth/contexts'
import { useLocation } from 'react-router-dom'

import {
  ProfileContainer,
  ProfileIcon,
  ProfileDropdown,
  ProfileDropdownLink,
} from './styles'


const ProfileMenu = () => {
  const { user } = useAuth()
  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const location = useLocation()
  const profileMenuRef = useRef(null)

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible)

  useEffect(() => {
    setDropdownVisible(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setDropdownVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const userName = user?.first_name

  return (
    <ProfileContainer ref={profileMenuRef}>
      <ProfileIcon onClick={toggleDropdown}>
        {userName.charAt(0).toUpperCase()}
      </ProfileIcon>
      {isDropdownVisible && (
        <ProfileDropdown>
          {(user?.is_guardian || user?.is_admin) && (
            <ProfileDropdownLink to='/hub'>Hub</ProfileDropdownLink>
          )}
          <ProfileDropdownLink to='/profile'>Profile</ProfileDropdownLink>
          <ProfileDropdownLink to='/settings'>Settings</ProfileDropdownLink>

          <ProfileDropdownLink to='/auth/logout/'>
            Sign Out
          </ProfileDropdownLink>
        </ProfileDropdown>
      )}
    </ProfileContainer>
  )
}

export default ProfileMenu
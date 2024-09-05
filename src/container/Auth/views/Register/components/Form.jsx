import { useState } from 'react'

import ErrorMsg from '../../../../../components/ErrorMsg/index'
import { Form, Input, RegisterBTN } from '../style'


const RegistrationForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.")
      return
    }
    if (!formData.email.includes('@')) {
      setError("Please enter a valid email.")
      return
    }
    setError(null)
    await onSubmit(formData)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <ErrorMsg message={error} />
      <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <Input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <Input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <Input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
      <RegisterBTN type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Join'}
      </RegisterBTN>
    </Form>
  )
}

export default RegistrationForm

import { useState, useEffect } from 'react'
import Button from '../Button/index'

import { 
  Form,
  Input,
  FieldContainer,
  Label,
  ToggleButton,
  InputContainer,
  Select
} from './styles'
import { TbEye, TbEyeClosed } from "react-icons/tb"


const DynamicForm = ({ fields, onSubmit, isLoading, buttonText }) => {
  const [formData, setFormData] = useState({})
  const [initialData, setInitialData] = useState({})
  const [passwordVisibility, setPasswordVisibility] = useState({})
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    const initialData = {}
    fields.forEach(field => {
      initialData[field.name] = field.value || ''
      if (field.type === 'password') {
        setPasswordVisibility(prevState => ({ ...prevState, [field.name]: false }))
      }
    })
    setFormData(initialData)
    setInitialData(initialData)
  }, [fields])

  const handleChange = (e) => {
    const { name, value } = e.target
    const updatedFormData = { ...formData, [name]: value }
    setFormData(updatedFormData)
    setIsChanged(JSON.stringify(updatedFormData) !== JSON.stringify(initialData))
  }

  const togglePasswordVisibility = (fieldName) => {
    setPasswordVisibility(prevState => ({ ...prevState, [fieldName]: !prevState[fieldName] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await onSubmit(formData)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FieldContainer key={field.name}>
          {field.title && <Label>{field.title}</Label>}
          <InputContainer>
            {field.type === 'select' ? (
              <Select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                {field.options && field.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            ) : (
              <Input
                type={passwordVisibility[field.name] ? 'text' : field.type}
                name={field.name}
                placeholder={field.placeholder || field.label}
                value={formData[field.name] || ''}
                onChange={handleChange}
              />
            )}

            {field.type === 'password' && (
              <ToggleButton
                type="button"
                onClick={() => togglePasswordVisibility(field.name)}
              >
                {passwordVisibility[field.name] ? <TbEye /> : <TbEyeClosed />}
              </ToggleButton>
            )}
          </InputContainer>
        </FieldContainer>
      ))}
      <Button
        text={isLoading ? 'Loading...' : buttonText}
        size="medium"
        shape="rounded"
        bgColor="var(--bg-primary)"
        hoverColor="none"
        type="submit"
        disabled={isLoading || !isChanged}
      />
    </Form>
  )
}

export default DynamicForm

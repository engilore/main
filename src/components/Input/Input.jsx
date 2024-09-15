import { InputContainer, Input, ToggleButton } from './styles'
import { TbEye, TbEyeClosed } from "react-icons/tb"


const CustomInput = ({ type, name, placeholder, value, onChange, togglePasswordVisibility, isPasswordVisible }) => {
  return (
    <InputContainer>
      <Input
        type={isPasswordVisible && type === 'password' ? 'text' : type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <ToggleButton type="button" onClick={() => togglePasswordVisibility(name)}>
          {isPasswordVisible ? <TbEye /> : <TbEyeClosed />}
        </ToggleButton>
      )}
    </InputContainer>
  )
}

export default CustomInput

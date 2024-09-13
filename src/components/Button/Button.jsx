import { Link } from 'react-router-dom'
import ProtectedComponent from '../../utils/protectedComponent'
import { BaseButton, ButtonIcon } from './styles'


const Button = ({
  text,
  size = 'base',
  shape = 'rounded',
  bgColor,
  textColor,
  hoverColor,
  icon,
  iconRight = false,
  type = 'button',
  href,
  to,
  onClick,
  allowedRoles = [],
  ...rest
}) => {
  const buttonProps = {
    $size: size,
    $shape: shape,
    $bgColor: bgColor,
    $textColor: textColor,
    $hoverColor: hoverColor,
    $iconRight: iconRight,
  }

  const buttonContent = (
    <>
      {!iconRight && icon && <ButtonIcon>{icon}</ButtonIcon>}
      {text}
      {iconRight && icon && <ButtonIcon $iconRight>{icon}</ButtonIcon>}
    </>
  )

  if (to) {
    return (
      <ProtectedComponent allowedRoles={allowedRoles}>
        <BaseButton
          as={Link}
          to={to}
          {...buttonProps}
          {...rest}
        >
          {buttonContent}
        </BaseButton>
      </ProtectedComponent>
    )
  }

  if (href) {
    return (
      <ProtectedComponent allowedRoles={allowedRoles}>
        <BaseButton
          as="a"
          href={href}
          {...buttonProps}
          {...rest}
        >
          {buttonContent}
        </BaseButton>
      </ProtectedComponent>
    )
  }

  return (
    <ProtectedComponent allowedRoles={allowedRoles}>
      <BaseButton
        type={type}
        onClick={onClick}
        {...buttonProps}
        {...rest}
      >
        {buttonContent}
      </BaseButton>
    </ProtectedComponent>
  )
}

export default Button
import { Link } from 'react-router-dom';
import { BaseButton, ButtonIcon } from './styles';

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
  ...rest
}) => {
  const buttonProps = {
    $size: size,
    $shape: shape,
    $bgColor: bgColor,
    $textColor: textColor,
    $hoverColor: hoverColor,
    $iconRight: iconRight,
  };

  if (to) {
    return (
      <BaseButton
        as={Link}
        to={to}
        {...buttonProps}
        {...rest}
      >
        {!iconRight && icon && <ButtonIcon>{icon}</ButtonIcon>}
        {text}
        {iconRight && icon && <ButtonIcon $iconRight>{icon}</ButtonIcon>}
      </BaseButton>
    );
  }

  if (href) {
    return (
      <BaseButton
        as="a"
        href={href}
        {...buttonProps}
        {...rest}
      >
        {!iconRight && icon && <ButtonIcon>{icon}</ButtonIcon>}
        {text}
        {iconRight && icon && <ButtonIcon $iconRight>{icon}</ButtonIcon>}
      </BaseButton>
    );
  }

  return (
    <BaseButton
      type={type}
      onClick={onClick}
      {...buttonProps}
      {...rest}
    >
      {!iconRight && icon && <ButtonIcon>{icon}</ButtonIcon>}
      {text}
      {iconRight && icon && <ButtonIcon $iconRight>{icon}</ButtonIcon>}
    </BaseButton>
  );
};

export default Button;

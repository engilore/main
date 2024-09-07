import { Link } from 'react-router-dom'
import { Tagger } from './styles'


const Tag = ({
  text,
  bgColor,
  textColor,
  borderColor,
  hoverBgColor,
  hoverTextColor,
  outlined = false,
  to,
  href,
  ...rest
}) => {
  const TagProps = {
    bgColor,
    textColor,
    borderColor,
    hoverBgColor,
    hoverTextColor,
    outlined,
  }

  if (to) {
    return (
      <Tagger as={Link} to={to} {...TagProps} {...rest}>
        {text}
      </Tagger>
    )
  }

  if (href) {
    return (
      <Tagger as="a" href={href} {...TagProps} {...rest}>
        {text}
      </Tagger>
    )
  }

  return <Tagger {...TagProps} {...rest}>{text}</Tagger>
}

export default Tag

import {
    Foot,
    Contain,
    Copyright,
    Name,
    FootLinks,
    FootLink
} from './styles'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Foot>
      <Contain>
        <Copyright>
          <Name>© {currentYear} Engilore. All Rights Reserved.</Name>
        </Copyright>
        <FootLinks>
            <FootLink to="/privacy-policy">Privacy</FootLink>
            <FootLink to="/terms-of-service">Terms</FootLink>
            <FootLink to="/terms-of-service">Contact</FootLink>
        </FootLinks>
      </Contain>
    </Foot>
  )
}

export default Footer

import styled from 'styled-components'


export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`

export const Hero = styled.section`
  background-color: var(--bg-accent);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeroWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px 0;
`

export const Type = styled.div`
  color: var(--bg-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  margin-bottom: 10px;
  text-transform: uppercase;
`

export const Title = styled.div`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-medium);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: var(--fs-2xl);
  }
`

export const Summary = styled.div`
  color: var(--clr-secondary);
  font-family: var(--fnt-primary);
  font-size: var(--fs-lg);
  font-weight: var(--fw-light);
  font-style: italic;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: var(--fs-md);
  }
`

export const Content = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 50px;
`

export const Text = styled.div`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-weight: var(--fw-normal);
  font-size: var(--fs-md);
  width: 100%;
  margin-bottom: 20px;
`

export const DateText = styled.div`
  color: var(--clr-secondary);
  font-family: var(--fnt-secondary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-base);
`

export const AuthorText = styled.div`
  color: var(--clr-primary);
  font-family: var(--fnt-secondary);
  font-weight: var(--fw-medium);
  font-size: var(--fs-lg);
`

export const MetadataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 800px;
  padding: 20px 0;
  font-size: var(--fs-md);
  color: var(--clr-secondary);
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 20px;
`
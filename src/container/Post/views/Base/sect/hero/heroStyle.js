import styled from 'styled-components';

export const Section = styled.section`
  background-color: var(--bg-accent);
  padding: 40px 0;
`;

export const Contain = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const PublishedSection = styled.div`
  background-color: var(--bg-white);
  padding: 20px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  max-height: 400px;
  overflow-y: auto;

  @media (max-width: 1024px) {
    max-height: none;
  }
`;

export const DraftSection = styled.div`
  background-color: var(--bg-white);
  padding: 20px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  max-height: 400px;
  overflow-y: auto;

  @media (max-width: 1024px) {
    max-height: none;
  }
`;

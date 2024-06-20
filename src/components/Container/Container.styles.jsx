import styled from "styled-components";

export const ContainerStyle = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    padding: 1rem 3rem;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 8rem;
  }
`;

export const ContainerStyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.azulEscuro};
  padding: 0.5rem;
  border-radius: 0.5rem;

  @media (min-width: 375px) {
    padding: 0.5rem 1rem;
  }

  @media (min-width: 1366px) {
    padding: 1rem;
  }
`;

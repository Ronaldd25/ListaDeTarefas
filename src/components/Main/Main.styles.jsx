import styled from "styled-components";

export const MainStyle = styled.main`
  background-color: ${({ theme }) => theme.colors.azulClaro};
  border-radius: 0.5rem;
  min-height: 100vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    padding: 1.5rem 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 0;
  }
`;

export const DivStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.azulEscuro};
  font-size: 1.1rem;

  @media (min-width: 375px) {
    font-size: 1.5rem;
  }

  @media (min-width: 425px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    margin-left: 1rem;
    font-size: 2.4rem;
  }

  @media (min-width: 1366px) {
    font-size: 3rem;
  }
`;
export const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
  @media (min-width: 1366px) {
    margin-top: 4rem;
  }
`;

export const LiStyle = styled.li`
  background-color: ${({ theme }) => theme.colors.azulEscuro};
  border-radius: 0.5rem;
  padding: 0.5rem;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }

  @media (min-width: 1366px) {
    margin-inline: 8rem;
  }
`;

export const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.rosa};
  font-size: 1.5rem;

  svg {
    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      margin-left: 2rem;
      font-size: 2rem;
    }

    @media (min-width: 1366px) {
      font-size: 3rem;
    }
  }
`;

export const SpanStyle = styled.span`
  color: ${({ theme }) => theme.colors.vermelho};
  font-size: 1.5rem;
  font-weight: 700;
  align-self: center;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-top: 4rem;
  }
  @media (min-width: 1366px) {
    font-size: 4rem;
  }
`;

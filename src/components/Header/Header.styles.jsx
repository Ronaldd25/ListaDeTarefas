import styled from "styled-components";
export const HeaderStyle = styled.header`
  height: 2rem;
  display: flex;
  background: linear-gradient(
    95deg,
    ${({ theme }) => theme.colors.azulEscuro} 66%,
    ${({ theme }) => theme.colors.azulClaro} 100%
  );
  gap: 1.5rem;
  align-items: center;
  padding-block: 1rem;
  padding-left: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1rem;
    background: linear-gradient(
      95deg,
      ${({ theme }) => theme.colors.azulEscuro} 60%,
      ${({ theme }) => theme.colors.azulClaro} 100%
    );
  }

  @media (min-width: 1366px) {
  }

  svg {
    color: ${({ theme }) => theme.colors.rosa};
    font-size: 2.3rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      margin-left: 2rem;
    }

    @media (min-width: 1366px) {
      font-size: 4rem;
      margin-left: 8rem;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.branco};
  letter-spacing: 0.1rem;
  font-size: 1.2rem;

  @media (min-width: 375px) {
    font-size: 1.5rem;
  }

  @media (min-width: 425px) {
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-left: 5rem;
  }

  @media (min-width: 1024px) {
    margin-left: 8rem;
    letter-spacing: 0.5rem;
  }
  @media (min-width: 1366px) {
    font-size: 3rem;
    margin-left: 12rem;
  }
`;

export const SpanStyle = styled.span`
  color: ${({ theme }) => theme.colors.azulEscuro};
  font-style: italic;
  background-color: ${({ theme }) => theme.colors.azulClaro};
  padding-inline: 1rem;
  border-radius: 1rem;
  box-shadow: 3px 2px 1px ${({ theme }) => theme.colors.azulEscuro};

  @media (min-width: 768px) {
    box-shadow: 5px 5px 2px ${({ theme }) => theme.colors.azulEscuro};
  }

  @media (min-width: 1024px) {
    box-shadow: 8px 8px 4px ${({ theme }) => theme.colors.azulEscuro};
    border-radius: 1.5rem;
  }
`;

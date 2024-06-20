import styled from "styled-components";

export const AddTaskStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.rosa};
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.branco};
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.azulEscuro};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    margin-right: 1rem;
  }

  @media (min-width: 1366px) {
  }
  svg {
    font-size: 0.8rem;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1366px) {
    }
  }
`;

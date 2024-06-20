import styled from "styled-components";

export const SortStyle = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    gap: 1rem;
  }

  @media (min-width: 1366px) {
    gap: 2rem;
  }
`;

export const ButtonStyles = styled.button`
  background-color: ${({ theme }) => theme.colors.rosa};
  color: ${({ theme }) => theme.colors.branco};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 0.6rem;
  }

  @media (min-width: 1366px) {
  }
`;

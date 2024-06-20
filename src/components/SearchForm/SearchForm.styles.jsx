import styled from "styled-components";

export const SearchFormStyle = styled.form`
  display: flex;
  gap: 0.2rem;
`;

export const InputStyle = styled.input`
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  outline: none;

  @media (min-width: 425px) {
    width: 14rem;
  }

  @media (min-width: 768px) {
    width: 25rem;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
    width: 30rem;
  }

  @media (min-width: 1024px) {
    padding: 0.5rem;
  }

  @media (min-width: 1366px) {
    width: 45rem;
  }
`;

export const ButtonStyle = styled.button`
  padding-inline: 0.5rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.rosa};
  background: ${({ theme }) => theme.colors.azulClaro};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    margin-left: 1rem;
  }
`;

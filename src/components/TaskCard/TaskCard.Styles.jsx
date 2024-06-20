import styled from "styled-components";

export const TaskCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  word-break: break-all;

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem;
    gap: 2rem;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) =>
    theme.done ? theme.colors.verde : theme.colors.azulClaro};
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  &::after {
    content: ${({ theme }) => (theme.done ? '"\u2705"' : "")};
    margin-left: 0.5rem;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1366px) {
    font-size: 2rem;
  }
`;

export const SpanStyle = styled.span`
  color: ${({ theme }) =>
    theme.done ? theme.colors.verde : theme.colors.azulClaro};

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoldStyle = styled.b`
  color: ${({ theme }) =>
    theme.done ? theme.colors.verde : theme.colors.vermelho};
`;

export const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckBoxStyle = styled.input`
  margin-left: 0.5rem;
  display: none;
`;

export const ButtonContainerStyle = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 1366px) {
    gap: 2rem;
  }
`;

export const ButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.colors.rosa};
  border: 1px solid ${({ theme }) => theme.colors.rosa};
  color: ${({ theme }) => theme.colors.branco};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const LabelCheckBoxStyle = styled.label`
  color: ${({ theme }) => theme.colors.branco};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.rosa};
  padding: 0.5rem;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }

  svg {
    font-size: 1.3rem;

    @media (min-width: 768px) {
      font-size: 1.7rem;
    }
  }
`;

import styled from "styled-components";

export const ModalContainerStyle = styled.div`
  background-color: #010101b3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.branco};
  display: flex;
  justify-content: center;
`;

export const ModalStyle = styled.form`
  background-color: ${({ theme }) => theme.colors.azulEscuro};
  top: 40%;
  position: absolute;
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;

  row-gap: 2rem;
  column-gap: 1rem;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    padding: 3rem;
    row-gap: 3rem;
  }

  @media (min-width: 1366px) {
    width: 50rem;
  }
`;

export const IconContainerStyle = styled.div`
  position: absolute;
  right: -0.6rem;
  top: -0.8rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.vermelho};

  @media (min-width: 768px) {
    font-size: 4rem;
    right: -1.5rem;
    top: -1.5rem;
  }
`;

export const TitleStyle = styled.h2`
  grid-area: 1/1/2/3;
  justify-self: center;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1366px) {
  }
`;

export const InputStyle = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;

  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding: 1rem;
  }

  @media (min-width: 1366px) {
  }
`;

export const LabelStyle = styled.label`
  align-self: center;
  font-size: 1.2rem;
  word-break: keep-all;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1366px) {
  }
`;

export const ButtonStyle = styled.button`
  font-size: 1.2rem;
  grid-area: 3/1/4/3;
  width: fit-content;
  justify-self: center;
  padding: 0.3rem 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.rosa};
  color: ${({ theme }) => theme.colors.branco};

  @media (min-width: 768px) {
    font-size: 1.7rem;
    padding: 1rem 3rem;
  }

  @media (min-width: 1366px) {
  }
`;

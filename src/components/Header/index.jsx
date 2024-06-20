import { HeaderStyle, Title, SpanStyle } from "./Header.styles";
import { BiTask } from "react-icons/bi";

export const Header = () => {
  return (
    <HeaderStyle>
      <BiTask />
      <Title>
        Lista de <SpanStyle>tarefas</SpanStyle>
      </Title>
    </HeaderStyle>
  );
};

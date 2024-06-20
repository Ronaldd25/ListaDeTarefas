import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaUp } from "react-icons/fa";
import { SortStyle, ButtonStyles } from "./Sort.styles";
import { useTaskStore } from "../../Hook/useTaskStore";

export const Sort = () => {
  const { list, updateTaskList } = useTaskStore();

  const ordemCrescente = () => {
    const ordemCrescenteList = list.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    updateTaskList([...ordemCrescenteList]);
  };

  const ordemDecrescente = () => {
    const ordemDecrescenteList = list.sort((a, b) =>
      b.title.localeCompare(a.title)
    );

    updateTaskList([...ordemDecrescenteList]);
  };
  return (
    <SortStyle>
      <ButtonStyles onClick={ordemCrescente}>
        <FaSortAlphaDown />
      </ButtonStyles>
      <ButtonStyles onClick={ordemDecrescente}>
        <FaSortAlphaUp />
      </ButtonStyles>
    </SortStyle>
  );
};

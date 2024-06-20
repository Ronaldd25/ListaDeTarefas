import {
  MainStyle,
  DivStyle,
  Title,
  UlStyle,
  LiStyle,
  ContainerStyle,
  SpanStyle,
} from "./Main.styles";
import { TaskCard } from "../TaskCard";
import { AddTask } from "../AddTask";
import { MdArrowDownward } from "react-icons/md";
import { useTaskStore } from "../../Hook/useTaskStore";

export const Main = () => {
  const { list } = useTaskStore();

  return (
    <MainStyle>
      <DivStyle>
        <ContainerStyle>
          <MdArrowDownward />
          <Title>Minhas tarefas</Title>
        </ContainerStyle>
        <AddTask />
      </DivStyle>
      {list.length ? null : <SpanStyle>Sem Tarefas para exibir</SpanStyle>}
      <UlStyle>
        {list.map((task) => (
          <LiStyle key={task.id}>
            <TaskCard title={task.title} isDone={task.done} id={task.id} />
          </LiStyle>
        ))}
      </UlStyle>
    </MainStyle>
  );
};

/* eslint-disable react/prop-types */
import { useState, useId } from "react";
import {
  TaskCardStyle,
  Title,
  SpanStyle,
  BoldStyle,
  ContainerStyle,
  CheckBoxStyle,
  ButtonContainerStyle,
  ButtonStyle,
  LabelCheckBoxStyle,
} from "./TaskCard.Styles";
import { Modal } from "../AddTaskModal/";

import { ThemeProvider } from "styled-components";

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { useTaskStore } from "../../Hook/useTaskStore";

export const TaskCard = ({ title, isDone, id }) => {
  const [done, setDone] = useState(isDone);
  const [isOpen, setIsOpen] = useState(false);
  const idLabel = useId();
  const { list, updateTaskList } = useTaskStore();

  const handleOnChange = () => {
    setDone(!done);
  };

  const handleClick = () => setIsOpen(!isOpen);

  const deleteTask = () => {
    const filteredTasks = list.filter((task) => task.id !== id);

    updateTaskList(filteredTasks);
  };

  return (
    <ThemeProvider
      theme={(theme) => {
        return { ...theme, done };
      }}
    >
      <TaskCardStyle>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Renomear tarefa"
            action="Novo titulo: "
            buttonText="Renomear"
            id={id}
            type="rename"
          />
        )}
        <Title>{title}</Title>
        <SpanStyle>
          Status: <BoldStyle>{done ? "Concluída" : "Não concluída"}</BoldStyle>
        </SpanStyle>
        <ContainerStyle>
          <div>
            <LabelCheckBoxStyle htmlFor={idLabel}>
              {done ? "Desfazer" : "Concluir"}
              {done ? (
                <CiCircleRemove color="#FCFFE7" />
              ) : (
                <CiCircleCheck color="#FCFFE7" />
              )}
              <CheckBoxStyle
                id={idLabel}
                type="checkbox"
                checked={done}
                onChange={handleOnChange}
              />
            </LabelCheckBoxStyle>
          </div>

          <ButtonContainerStyle>
            <ButtonStyle onClick={handleClick}>
              <CiEdit />
            </ButtonStyle>

            <ButtonStyle onClick={deleteTask}>
              <MdDelete />
            </ButtonStyle>
          </ButtonContainerStyle>
        </ContainerStyle>
      </TaskCardStyle>
    </ThemeProvider>
  );
};

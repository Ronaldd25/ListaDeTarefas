/* eslint-disable react/prop-types */
import { useId, useState } from "react";
import { useTaskStore } from "../../Hook/useTaskStore";
import {
  ModalContainerStyle,
  ModalStyle,
  InputStyle,
  TitleStyle,
  LabelStyle,
  ButtonStyle,
  IconContainerStyle,
} from "./AddTaskModal.styles";
import { IoMdCloseCircle } from "react-icons/io";

export const Modal = ({
  isOpen,
  setIsOpen,
  title,
  action,
  buttonText,
  id,
  type,
}) => {
  const [value, setValue] = useState("");
  const idLabel = useId();
  const TaskId = useId();

  const { list, updateTaskList } = useTaskStore();

  const handleClick = () => setIsOpen(!isOpen);

  const handleChange = ({ target }) => setValue(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    if (type === "rename") {
      const newTaskList = list.map((task) => {
        if (task.id === id) {
          task.title = value;
        }
        return task;
      });

      updateTaskList(newTaskList);
    } else {
      updateTaskList([
        ...list,
        {
          id: TaskId,
          title: value,
          done: false,
        },
      ]);
    }

    handleClick();
  };

  return (
    <ModalContainerStyle>
      <ModalStyle onSubmit={handleSubmit}>
        <IconContainerStyle onClick={handleClick}>
          <IoMdCloseCircle />
        </IconContainerStyle>
        <TitleStyle>{title}</TitleStyle>
        <LabelStyle htmlFor={idLabel}>{action}</LabelStyle>
        <InputStyle
          id={idLabel}
          value={value}
          onChange={handleChange}
          autocomplete="off"
        />
        <ButtonStyle>{buttonText}</ButtonStyle>
      </ModalStyle>
    </ModalContainerStyle>
  );
};

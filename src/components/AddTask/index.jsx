import { useState } from "react";
import { AddTaskStyle } from "./AddTask.styles";
import { FaPlus } from "react-icons/fa";
import { Modal } from "../AddTaskModal";

export const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <AddTaskStyle onClick={handleClick}>
        <FaPlus />
        Nova Tarefa
      </AddTaskStyle>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="Adicione uma tarefa"
          action="Titulo: "
          buttonText="Criar"
        />
      )}
    </>
  );
};

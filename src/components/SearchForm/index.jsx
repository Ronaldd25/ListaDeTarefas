import { useRef } from "react";
import { SearchFormStyle, InputStyle, ButtonStyle } from "./SearchForm.styles";
import { useTaskStore } from "../../Hook/useTaskStore";
import { FaSearch } from "react-icons/fa";

export const SeachForm = () => {
  const inputRef = useRef(null);
  const { list, updateTaskList } = useTaskStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;

    const filteredTaskList = list.filter((task) => {
      return task.title.toLowerCase().includes(inputValue.toLowerCase());
    });

    updateTaskList(filteredTaskList);
  };

  const handleOnChange = ({ target }) => {
    if (!target.value) {
      window.location.reload();
    }
  };

  return (
    <SearchFormStyle onSubmit={handleSubmit}>
      <InputStyle
        type="search"
        placeholder="Buscar tarefa"
        ref={inputRef}
        onChange={handleOnChange}
      />
      <ButtonStyle type="submit">
        <FaSearch />
      </ButtonStyle>
    </SearchFormStyle>
  );
};

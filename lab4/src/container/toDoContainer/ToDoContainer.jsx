import React, { useState } from "react";
import ToDoTable from "../../component/toDoTable/ToDoTable";
import SearchBar from "../../component/searchBar/SearchBar";
import ToDoCreateForm from "../../component/todoCreateForm/ToDoCreateForm";
import useGetAllToDo from "../../hooks/useGetAllToDo";

const ToDoContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const { isLoading, data: toDoL, error } = useGetAllToDo();  // Використовуємо наш кастомний хук

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const DeleteToDo = (id) => {
    setToDoL(toDoL?.filter((td) => td.id !== id));
  };

  const CreateToDo = (todo) => {
    setToDoL([todo, ...toDoL]);
  };

  const listByFilter = toDoL?.filter((td) =>
    td.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="to-do-container">
      <div>
        <ToDoCreateForm CreateToDo={CreateToDo} />
        <SearchBar
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
        />
        <ToDoTable list={listByFilter} DeleteToDo={DeleteToDo} />
      </div>
    </div>
  );
};

export default ToDoContainer;

import React, { useState } from "react";
import ToDoTable from "../../component/toDoTable/ToDoTable";
import SearchBar from "../../component/searchBar/SearchBar";
import ToDoCreateForm from "../../component/todoCreateForm/ToDoCreateForm";
import useGetAllToDo from "../../hooks/useGetAllToDo";

const ToDoContainer = () => {
  const [searchValue, setSearchValue] = useState("");
  const { toDoL, isLoading, error, setToDoL } = useGetAllToDo();

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const DeleteToDo = (id) => {
    setToDoL(toDoL.filter((td) => td.id !== id)); // Видаляємо завдання
  };

  const CreateToDo = (todo) => {
    setToDoL([todo, ...toDoL]); // Додаємо нове завдання
  };

  const listByFilter = toDoL.filter((td) =>
    td.title.toLowerCase().includes(searchValue.toLowerCase())
  );

   if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Виводимо основну частину
  return (
    <div className="todo-app">
      <div className="todo-container">
        <div className="todo-header">To-Do List</div>
        <ToDoCreateForm CreateToDo={CreateToDo} />
        <SearchBar
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
        />
        {/* Виводимо таблицю тільки якщо є дані */}
        {listByFilter.length > 0 ? (
          <ToDoTable list={listByFilter} DeleteToDo={DeleteToDo} />
        ) : (
          <div>No ToDo items found</div>
        )}
      </div>
    </div>
  );
};

export default ToDoContainer;
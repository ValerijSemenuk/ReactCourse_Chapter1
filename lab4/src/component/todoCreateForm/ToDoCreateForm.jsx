import React, { useState } from "react";

const ToDoCreateForm = ({ CreateToDo }) => {
  const [title, setTitle] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Зупиняємо стандартну поведінку
    if (title.trim() === "") {
      alert("Title can't be empty");
      return;
    }
    const newTd = {
      id: Date.now(),
      userId: Date.now() - Date.now() / 2,
      title: title,
      completed: checked,
    };
    CreateToDo(newTd);
    setTitle("");  // Очищаємо поле після додавання
    setChecked(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}  // Додаємо обробник форми
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #000",
          borderRadius: "5px",
          padding: "10px",
          width: "fit-content",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span>Title: </span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              style={{ margin: "5px" }}
            />
          </div>

          <div>
            <span>Completed: </span>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              name="completed"
              style={{ margin: "5px" }}
            />
          </div>
        </div>
        <button
          type="submit" // Змінюємо тип на submit
          style={{ marginTop: "10px", padding: "5px" }}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default ToDoCreateForm;

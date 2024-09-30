import React, { useState } from 'react'
import PageTitle from './components/PageTitle'
import ToDoContainer from './components/ToDoContainer'

function ToDoApp() {
  return (
    <div className="todo-app">
      <PageTitle title="ToDo App" />
      <ToDoContainer />
    </div>
  )
}
export default ToDoApp

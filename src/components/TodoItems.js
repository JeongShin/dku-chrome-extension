/* eslint-disable no-unused-vars */
import React from 'react';

const TodoItems = ({ text, todos, todo, setTodos }) => {
  const deleteButtonClickHandler = () =>
    setTodos(todos.filter(el => el.id !== todo.id));

  const checkButtonClickHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return { ...item, completed: true };
        }
        return item;
      }),
    );
  };

  return (
    <div>
      <ul>{text}</ul>
      <button type="submit" onClick={deleteButtonClickHandler}>
        Delete Button
      </button>
      <button type="submit" onClick={checkButtonClickHandler}>
        Check Button
      </button>
    </div>
  );
};

export default TodoItems;

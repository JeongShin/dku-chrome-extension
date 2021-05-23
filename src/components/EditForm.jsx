import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import SubjectForm from './SubjectForm';

const EditForm = ({
  todos,
  setTodos,
  todoId,
  todoEditSpace,
  todoCompleted,
  todoChildren,
  addSubjectHandler,
}) => {
  const [editInput, setEditInput] = useState('');

  const handleEditedTitleChange = e => {
    e.preventDefault();
    setEditInput(e.target.value);
  };

  const editSubmitHandler = () => {
    if (!editInput) {
      window.alert('수정할 내용을 입력하세요');
      return;
    }

    setTodos(
      todos.map(item => {
        if (item.id === todoId) {
          return {
            ...item,
            id: todoId,
            title: editInput,
            editSpace: false,
            completed: todoCompleted,
            children: todoChildren,
          };
        }
        return item;
      }),
    );
  };

  return (
    <form>
      <input
        placeholder="수정할 내용을 입력하세요"
        onChange={handleEditedTitleChange}
      />
      <button onClick={editSubmitHandler}>수정</button>
    </form>
  );
};

export default EditForm;

import React, { useState, useEffect } from 'react';
import { MdAdd as AddButtonIcon } from 'react-icons/md';
import styled from 'styled-components';
import SubjectForm from './SubjectForm';
import { TODO_LIST_KEY } from '../common/constants/index';
import TodoList from './TodoList';
import Toggler from './Toggler';

const Todo = ({ toggleTheme }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosInString = localStorage.getItem(TODO_LIST_KEY);
    if (todosInString === null) return;
    const todosObj = JSON.parse(todosInString);
    setTodos(todosObj);
  }, []);

  const addSubjectHanlder = ({ subject }) => {
    if (!subject.title) {
      window.alert('과목명에 내용을 입력 해주세요 ');
      return;
    }

    setTodos(prevTodos => {
      const newTodos = [...prevTodos, subject];
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const removeSubjectHandler = ({ subjectId }) => {
    const isContinue = window.confirm('정말로 삭제 하시겠어요?');

    if (!isContinue) return;

    setTodos(prev => {
      const removedTodos = prev.filter(v => v.id !== subjectId);
      localStorage.setItem(TODO_LIST_KEY, JSON.stringify(removedTodos));
      return removedTodos;
    });
  };

  return (
    <TodoConatiner>
      <Toggler toggleTheme={toggleTheme} />
      <SubjectForm addSubjectHanlder={addSubjectHanlder} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        removeSubjectHandler={removeSubjectHandler}
      />
    </TodoConatiner>
  );
};

const TodoConatiner = styled.div`
  width: 100%;
`;

const TodoFormWrapper = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Input = styled.input`
  padding: 8px;
  font-size: 18px;
  line-height: 1.5;
  color: black;
  flex: 1;
`;

const InsertButton = styled.div`
  color: ${({ theme }) => theme.textColor};
  padding-left: 16px;
  padding-right: 16px;
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  background-color: ${({ theme }) => theme.primaryColor};
  &:hover {
    background - color: ${({ theme }) => theme.primaryTintColor};
  }
`;

export default Todo;

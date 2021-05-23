import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosAddCircle } from 'react-icons/io';
import EditForm from './EditForm';

const ICON = ['📓', '📕', '📒', '📙', '📘', '📗'];

const TodoList = ({
  todos,
  setTodos,
  addSubjectHandler,
  editSpaceIsVisibleHandler,
  removeSubjectHandler,
  checkSubjectHandler,
  addDetailHandler,
}) => (
  <div>
    {todos.map(todo => (
      <Todo key={todo.id}>
        <TodoTitle>
          <TodoIcon>{ICON[todo.id % 6]}</TodoIcon>
          {todo.editSpace ? (
            <EditForm
              todos={todos}
              setTodos={setTodos}
              todoId={todo.id}
              todoEditSpace={todo.editSpace}
              addSubjectHandler={addSubjectHandler}
            />
          ) : (
            todo.title
          )}
        </TodoTitle>
        <EditButton
          onClick={() => editSpaceIsVisibleHandler({ subjectId: todo.id })}
        >
          Edit Toggle
        </EditButton>
        <CompleteButton
          onClick={() => checkSubjectHandler({ subjectId: todo.id })}
        >
          Check
        </CompleteButton>
        <DetailButton
          onClick={() =>
            addDetailHandler({
              todoItem: todo,
              todoId: todo.id,
              subjectDetail: todo.children,
            })
          }
        >
          <IoIosAddCircle size="24" />
        </DetailButton>
        <DeleteButton
          onClick={() => removeSubjectHandler({ subjectId: todo.id })}
        >
          ❌
        </DeleteButton>
      </Todo>
    ))}
  </div>
);

const DetailButton = styled.div`
  color: green;
`;
const TodoIcon = styled.div`
  margin-right: 10px;
`;

const TodoTitle = styled.div`
  font-size: 24px;
  display: flex;
`;

const Todo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  min-height: 60px;
  padding: 16px;
`;

const DeleteButton = styled.div`
  color: red;
`;

const CompleteButton = styled.div`
  color: green;
  padding-left: 40px;
  margin-left: 300px;
  align-items: center;
`;

const EditButton = styled.div`
  color: oragne;
`;

export default TodoList;

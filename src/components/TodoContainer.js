import React from 'react';
import styled from 'styled-components';

const TodoContainer = ({ children }) => (
  <TodoWrapper>
    <TodoTitle>할 일 목록</TodoTitle>
    <TodoContent>{children}</TodoContent>
  </TodoWrapper>
);

const TodoWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TodoTitle = styled.div`
  height: 60px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoContent = styled.div`
  background: #fff;
`;

export default TodoContainer;

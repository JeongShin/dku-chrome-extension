import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ThemeProvider from '../provider/theme';

const NewTab = () => (
  <ThemeProvider>
    <GlobalStyle />
    <NewTabWrapper>새탭 입니다 ㅎㅎ</NewTabWrapper>
  </ThemeProvider>
);

const GlobalStyle = createGlobalStyle`
    body, #root {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        transition: all 1s linear;
    }
`;

const NewTabWrapper = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export default NewTab;

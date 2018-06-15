import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

class App extends Component {

  render() {
    return (
        <Container>
            <TodoList/>
            <TodoList/>
            <TodoList/>
        </Container>
    );
  }
}

export default App;

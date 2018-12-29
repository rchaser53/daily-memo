import * as React from "react";
import { Component } from "react";
import "./App.css";

import styled from 'styled-components';

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <p>
            nya-n
          </p>
        </Header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Toolbar from './Toolbar';

class App extends React.Component {
  render() {
    return(
      <div>
        <Toolbar>
          <h1>Hello React Component Style</h1>
          <p>CSS Module, CSS in JS, Styled Component</p>
        </Toolbar>

        <Toolbar>
          <h2>CSS in React</h2>
        </Toolbar>

        <Toolbar>
          <h2>CSS in React</h2>
        </Toolbar>
      </div>
    )
  }
};

export default App;
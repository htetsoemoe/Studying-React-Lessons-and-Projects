import React from 'react';
import Toolbar from './Toolbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Toolbar>
          <h1>Hello React</h1>
          <p>
            I'm the one who want to be with you.
            Just to be the next to be with you.
          </p>
        </Toolbar>
      </div>
    )
  };
}

export default App;
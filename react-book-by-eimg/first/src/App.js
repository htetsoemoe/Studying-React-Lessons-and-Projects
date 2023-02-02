import React from 'react';

class Item extends React.Component {
  render() {
    return <li>Content from Item Component</li>
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          <li>JavaScript</li>
          <li>ES6 Features</li>
          <li>React</li>
        </ul>

        <ol>
          <Item />
          <Item />
        </ol>
      </div>
    )
  }
}

export default App;

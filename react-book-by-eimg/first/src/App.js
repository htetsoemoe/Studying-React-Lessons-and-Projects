import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.name},
        {this.props.price}
      </li>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          <Item name="JavaScript Course" price="free" /> {/* Parent data to child */}
          <Item name="Spring Course" price="free" />
          <Item name="React Course" price="free"/>
        </ul>
      </div>
    )
  }
}

export default App;

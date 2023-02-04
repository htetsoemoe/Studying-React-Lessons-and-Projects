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
  state = {
    items: [
      { id: 1, name: "JavaScript Course", price: "free"},
      { id: 2, name: "Spring Course", price: "free" },
      { id: 3, name: "React Course", price: "free" },
      { id: 3, name: "React Course", price: "free" },
      { id: 5, name: "DevOp Course", price: "free" },
    ]
  };

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {/* Parent to Child => using props */}
          {
            this.state.items.map(({name, price}) => {
              return <Item name={name} price={price}/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;

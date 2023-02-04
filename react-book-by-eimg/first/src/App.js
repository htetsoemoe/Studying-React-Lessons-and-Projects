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
      { id: 1, name: "Java Basic", price: 300000},
      { id: 2, name: "Full Stack Spring Framework Course", price: 300000 },
      { id: 3, name: "React Course", price: 200000 },
    ]
  };

  add = () => {
    let id = this.state.items.length + 1;

    this.setState({
      items: [
        ...this.state.items,
        {id, name: `Item ${id}`, price: 0.01 * id}
      ]
    });
  };

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {/* Parent to Child => using props */}
          {
            this.state.items.map(({id, name, price}) => {
              return <Item key={id} name={name} price={price}/>
            })
          }
        </ul>
        <button onClick={this.add}>Add Item</button>
      </div>
    )
  };
}

export default App;

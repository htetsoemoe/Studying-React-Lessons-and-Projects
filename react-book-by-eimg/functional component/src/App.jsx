import React, {createRef, useState} from 'react';

const Item = ({name, price}) => {
  return (
    <li>
      {name}, ${price}
    </li>
  )
};

const App = () => {
  // useState returns [Json Array for state, setter for state]
  let [items, setItems] = useState([
    {id: 1, name: 'Apple', price: 0.99},
    {id: 2, name: 'Orange', price: 1.20},
  ]);

  const nameRef = createRef();
  const priceRef = createRef();

  const add = () => {
    let id = items.length + 1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;

    setItems([
      ...items,
      {id, name, price}
    ]);
  };

  return (
    <div>
      <ul>
        {items.map(item =>
          <Item key={item.id} name={item.name} price={item.price}/>
        )}
      </ul>
      <input type="text" ref={nameRef} /><br />
      <input type="text" ref={priceRef} /><br />
      <button onClick={add}>Add Item</button>
    </div>
  )
};

export default App;
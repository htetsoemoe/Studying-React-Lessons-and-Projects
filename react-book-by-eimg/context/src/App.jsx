import React from "react";

const MyContext = React.createContext("My Context Value");

const App = props => {
  return <Header></Header>
};

const Header = props => {
  return <Title></Title>
};

const Title = props => {
  // get context value using 'useContext' hook
  const value = React.useContext(MyContext);
  return <h1>{value}</h1>
};

export default App;
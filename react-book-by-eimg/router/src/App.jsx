import React from 'react'
import {
  BrowserRouter as Router,
  /** You are using react-router-dom version 6, which replaced Switch with the Routes component */
  Routes, // instead of Switch
  Route,
  Link,
  useParams
} from 'react-router-dom'



const users = [
  { id: 1, name: 'Alice', gender: 'f' },
  {id: 2, name: 'Bob', gender: 'm'},
  {id: 3, name: 'James', gender: 'm'},
  { id: 4, name: 'Cherry', gender: 'f' },
]

const Male = props => {
  return (
    <ul>
      {users.filter(user => user.gender === 'm')
      .map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

const Female = props => {
  return (
    <ul>
      {users.filter(user => user.gender === 'f')
      .map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

const User = props => {
  const {name} = useParams();
  return (
    <h4>Profile - {name}</h4>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/male">Male</Link></li>
          <li><Link to="/female">Female</Link></li>
          <li><Link to="/user/Alice">Alice</Link></li>
          <li><Link to="/user/bob">Bob</Link></li>
        </ul>

        <div style={{background: 'cyan', padding: 20, marginBottom: 10}}>
          <Routes>
            <Route path='/male' element={<Male />}/>
            <Route path='/female' element={<Female />}/>
          </Routes>
        </div>

        <div style={{background: 'skyblue', padding: 20}}>
          <Routes>
            <Route path='/user/:name' element={<User />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

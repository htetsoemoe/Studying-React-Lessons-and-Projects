import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// createStore needs reducer function > (state, action) => state
const store = createStore((state = [], action) => {
  if(action.type === 'ADD') return [...state, action.item]
  return state
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
)

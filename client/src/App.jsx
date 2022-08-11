import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const name='john'
  const isNameShowing=false

  return (
    <div className="App">
      <h1>Hello World! {isNameShowing?name:"Someone"}</h1>
    </div>
  )
}

export default App

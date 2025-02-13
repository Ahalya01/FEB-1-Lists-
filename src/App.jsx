// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'
import Menuitems from './Components/Menuitems'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>List Of The Products:</h1>
      <Menuitems/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum fugit maxime. Consequuntur, vitae consectetur.</p>
      <Cards/>
    </>
  )
}

export default App

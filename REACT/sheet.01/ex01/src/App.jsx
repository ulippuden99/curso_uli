import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarjeta from './components/Tarjeta'
import ListaDeTarjetas from './components/ListaDeTarjetas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaDeTarjetas />
    </>
  )
}

export default App

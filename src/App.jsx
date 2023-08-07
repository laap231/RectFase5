import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fase 5 Operar</h1>
      <div className="card">
        <h3>Integrante grupo 5</h3>
        <h4>Nombre: Yuby Yulieth Contreras</h4>
        <h4>Código: 1007422631</h4>
        <h4>Nombre: Yuby Yulieth Contreras</h4>
        <h4>Nombre: Jesus Alberto Guzman</h4>
        <h4>Código: 14888574</h4>
        <h4>Nombre: Luis Antonio Almeida Paz</h4>
        <h4>Código: 1085265896</h4>
        <a href='inicio.html'>Click para ir al proyecto</a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

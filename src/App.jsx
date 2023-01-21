import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Barra from './Components/NavBar/Navbar'
import Saludo from './Components/ItemListContainer/Saludo'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
    <Barra />
    <Saludo saludo="Bienvenido/a!!"/>
    </>
  )
}

export default App

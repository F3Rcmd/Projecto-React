import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'


import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={ <ItemListContainer /> } />
      <Route path='/Categoria/:idCategoria' element={ <ItemListContainer /> } />
      <Route path='/Detalles/:idProd' element={ <ItemDetailContainer /> } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

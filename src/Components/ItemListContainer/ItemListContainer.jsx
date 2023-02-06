import { useEffect, useState, } from "react";
import { NavLink, useParams } from "react-router-dom";
import { gFetch } from "../../../utils/gFetch"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListContainer = () =>{

const [ ListaProd, setListaProd] = useState([])
const [ loading, setLoading] = useState(true)

const { idCategoria } = useParams()

useEffect(()=>{
	if (idCategoria) {
  gFetch()
	 .then(res => {
	 	 setListaProd(res.filter(Info => Info.categ === idCategoria))})
  .catch(error => console.log(error))
  .finally(() => setLoading(false))
	} else {
	gFetch()
	 .then(res => {
	 	 setListaProd(res)
	 })
  .catch(error => console.log(error))
  .finally(() => setLoading(false))
	}

}, [idCategoria])

return(
loading
?
 <h2 style={{margin: 120}}>Cargando...</h2> 
:

<div style={{
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
	padding: 100
}}>

  {ListaProd.map(info => <div key={info.id} className='card bg-dark text-white' style={{margin: 25}}>
  	<img className='card-img' variant='top' src={info.foto} alt="PH"/>
	  <div className='card-title'> {info.nombre} </div>
	  <div className='card-body'> 
	   Categoria: {info.categ} <br/> Precio: {info.precio}$
	  </div>
	  <div className='card-footer'>
		  <NavLink to={`/Detalles/${info.id}`} className={({ isActive }) => isActive ? 'btn btn-light w-100':'btn btn-outline-light w-100'}> Mas </NavLink>
	  </div>
  </div>
  )}

</div>
)}

export default ItemListContainer;

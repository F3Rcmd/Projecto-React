import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../utils/gFetch"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetailContainer= () => {
	const [ ListaProd, setListaProd] = useState([])
	const [ loading, setLoading] = useState(true)
	const { idProd } = useParams()
    
    useEffect(()=>{
    gFetch()
	 .then(res => {
	 	 setListaProd(res.filter(Info => Info.id === idProd))})
     .catch(error => console.log(error))
     .finally(() => setLoading(false))
    }, [idProd])

	return (
    loading
    ?
     <h2 style={{margin: 120}}>Cargando...</h2> 
    :

    <div>

      {ListaProd.map(info => <div key={info.id} className='card bg-dark text-white' style={{margin: 125}}>
  	    <img className='card-img w-25' variant='top' src={info.foto} alt="PH"/>
	    <div className='card-title'> {info.nombre} </div>
	    <div className='card-body'> 
	      Categoria: {info.categ} <br/> Precio: {info.precio}$ <br/> Descripción: {info.Desc} 
	    </div>
      </div>
      )}

    </div>

	)
}

export default ItemDetailContainer;
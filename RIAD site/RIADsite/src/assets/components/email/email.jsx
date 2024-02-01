import React,{Link } from 'react'
import './email.css' ;
const Email = (props) => {
  return (
    <div id='email'>
        <a href={props.email} >Demandez un devis par mail</a>
    </div>
  )
}

export default Email
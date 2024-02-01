import React from 'react'
import './bigarticle.css'
const Bigarticle = (props) => {
  return (
    <article id={props.id} className='bigarticle'>
       <div className='ensembleh1'> 
       <div className='deco'></div>
       <h1>{props.titre}</h1>
       </div>
       <p> {props.contenu}</p>
    </article>
  )
}

export default Bigarticle
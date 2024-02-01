import React from 'react'
import './bigarticle.css'
const Bigarticle = (props) => {
  return (
    <article id={props.ida} className='bigarticle'>
       <div className='ensembleh1'> 
       <div className='deco'></div>
       <h1>{props.titre}</h1>
       </div>
       <p className='para'> {props.contenu}</p>
    </article>
  )
}

export default Bigarticle
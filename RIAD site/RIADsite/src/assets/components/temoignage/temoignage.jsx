import React from 'react'
import './temoignage.css'
const Temoignage = (props) => {
  return (
    <article className='articleTemoignage'>
        
        <div className='temoignage'>
            <img  className='image' src={props.image} alt="" />
        <div>
        <h2 className='h2Temoin'>{props.prenom}</h2>
            <p className='pTemoignage'>{props.contenu}</p>
        </div>
        </div>
        </article>
  )
}

export default Temoignage
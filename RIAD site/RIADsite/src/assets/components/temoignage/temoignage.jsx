import React from 'react'
import './temoignage.css'
const Temoignage = (props) => {
  return (
    <article className='articleTemoignage'>
        <h1 className='h1temoignage'>Temoignage</h1>
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
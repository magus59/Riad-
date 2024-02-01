import React from 'react'
import './article.css' ;
const Article = (props) => {
  return (
    <article className='div'>
        <div className='ensembleh1'>
          <div className='deco'></div>
          <h1>{props.titre}</h1>
        </div>
        <p>{props.article}</p>
        
    </article>
  )
}

export default Article
import React from 'react'
import './article.css' ;
const Article = (props) => {
  return (
    <article className='div'>
        <h1>{props.titre}</h1>
        <p>{props.article}</p>
    </article>
  )
}

export default Article
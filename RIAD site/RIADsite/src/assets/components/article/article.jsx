import React from 'react'
import './article.css' ;
const Article = (props) => {
  return (
    <article className='div'>
        <div className='ensembleh1'>
          <div className='deco'></div>
          <h1>{props.titre}</h1>
        </div>
        <p className='para'>{props.article}</p>
        <div className='decoLink'>
          <div className='positionLink'>
            <a className='link' href={props.link}> -> </a>
          </div>
        </div>
    </article>
  )
}

export default Article
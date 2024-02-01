import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './article.css' ;
const Article = (props) => {
  return (
    <article className='div'>
        <div className='ensembleh1'>
          <div className='deco'></div>
          <h1>{props.titre}</h1>
        </div>
        <p className='para'>{props.article}</p>
        <Link
          className='link'
    activeClass="active"
    to={props.linka}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>
        <div className='decoLink'>
          <div className='positionLink'>
            ->
          </div>
        </div>
 </Link>

          
    </article>
  )
}

export default Article
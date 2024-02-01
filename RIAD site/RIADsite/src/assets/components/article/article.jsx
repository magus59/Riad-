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
        <div className='decoLink'>
          <div className='positionLink'>
          <Link
          className='link'
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
> -> </Link>

          </div>
        </div>
    </article>
  )
}

export default Article
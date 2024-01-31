import React from 'react'
import './head.css';
import imgHead from '../../../images/ampoule.jpg'

const Head = () => {
  return (
    <>
        <div className='imgHead'>
            <img src={imgHead} alt="" />
        </div>
    </>
  )
}

export default Head
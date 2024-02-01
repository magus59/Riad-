import React from 'react'
import './partenaire.css'
import boucher from '../../images/boucher.jpeg'
import lmh from  '../../images/lmh.png'
const Partenaire = () => {
  return (
    <div><h1 id='partenaireh1'>ils nous ont fait confiance</h1>
    <div className='containaireImage'>
        <img className='imagePartenaire' src={boucher} alt="" />
        <img className='imagePartenaire' src={lmh} alt="" />
    </div>
    </div>
  )
}

export default Partenaire
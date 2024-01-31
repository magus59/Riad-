import React from 'react'
import './footer.css';


const Footer = (props) => {
  return (
    
   <>
    <div className="footer">
      <div className="section1">
        <div className="num1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus consequatur minima, quos reprehenderit magnam unde voluptatibus assumenda numquam facere!</p>
          </div>
        <div className="num2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis temporibus consequatur minima, quos reprehenderit magnam unde voluptatibus assumenda numquam facere!</p>
        </div>
      </div>
      <div className='logos'>
        {props.logos && props.logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className='logo2' />
        ))}
      </div>
      <div>
      <p className="copyright-text">&copy; 2024 All Rights Reserved. Mohamed Manseur and Yahia Mabchour.</p>
      </div>
    </div>
   </>

  )
}

export default Footer
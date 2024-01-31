import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';
import Head from './assets/components/header/head/Head';
import Nav from './assets/components/header/nav/Nav';
import Footer from './assets/components/footer/Footer';
import inLogo from './assets/images/linkedin.png';
import gmailLogo from './assets/images/gmail.png';
import facebookLogo from './assets/images/facebook.png';

function App() {
  const logosArray = [inLogo, gmailLogo, facebookLogo];

  return (
    <>
    <header>
      <Nav/>
    </header>
     <main>
     <Head/>


     </main>
     <Footer logos={logosArray}/>
    </>
  )
}

export default App

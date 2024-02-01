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
/**ajout par mohamed  */
import Email from './assets/components/email/email';

import Article from './assets/components/article/article';
function App() {
  const logosArray = [inLogo, gmailLogo, facebookLogo];
  const titredomaine ='Domaines d\'intervention';
  const articledomaine =`Lorem, ipsum dolor sit amet consectetur adipisicing.` ;
  
  const titreexperiences ='Notre expériences';
  const articleexperiences =`Lorem, ipsum dolor sit amet consectetur adipisicing.` ;
  const linkDomaione ='' ;
  const linkExpereiences ='' ;
  return (
    <>
    <header>
      <Nav/>
    </header>
     <main className='main'>
        <Head/>
        <Email email='son adresse email '/>
        <Article link={linkExpereiences} titre={titreexperiences} article={articleexperiences} />
        <Article link={linkDomaione} titre={titredomaine} article={articledomaine} />
   
     </main>
     <Footer logos={logosArray}/>
    </>
  )
}

export default App

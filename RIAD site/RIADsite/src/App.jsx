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
import Bigarticle from './assets/components/bigarticle/bigarticle';
import Article from './assets/components/article/article';
import Partenaire from './assets/components/partenaire/partenaire';
function App() {
  const logosArray = [inLogo, gmailLogo, facebookLogo];
  const titredomaine ='Domaines d\'intervention';
  const articledomaine =`Lorem, ipsum dolor sit amet consectetur adipisicing.` ;
  
  const titreexperiences ='Notre expériences';
  const articleexperiences =`Lorem, ipsum dolor sit amet consectetur adipisicing.` ;
  const linkDomaine ='domaine' ;
  const linkExperiences ='experience' ;

  const idbigexperience ='experience' ;
  const contenubigexperience ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus soluta aliquid quaerat veritatis debitis quos natus est voluptas voluptatum explicabo aperiam accusantium perferendis, itaque, officia eius ad cum illo distinctio consequatur accusamus doloremque ipsum iste. Quas ipsa obcaecati incidunt maiores eum maxime aut perferendis culpa soluta cumque! Molestias, temporibus eos? ' ;
  const idbigdomaine ='domaine' ;
  const contenubigdomaine ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus soluta aliquid quaerat veritatis debitis quos natus est voluptas voluptatum explicabo aperiam accusantium perferendis, itaque, officia eius ad cum illo distinctio consequatur accusamus doloremque ipsum iste. Quas ipsa obcaecati incidunt maiores eum maxime aut perferendis culpa soluta cumque! Molestias, temporibus eos? ' ;
  
  
  return (
    <>
    <header>
      <Nav/>
      <Head/>
    </header>
     <main className='main'>
        
        <Email email='son adresse email '/>
        <Partenaire/>
        <Article linka={linkExperiences} titre={titreexperiences} article={articleexperiences} />
        <Article linka={linkDomaine} titre={titredomaine} article={articledomaine} />
        <Bigarticle ida={idbigexperience} contenu={contenubigexperience} titre={titreexperiences}/>
        <Bigarticle ida={idbigdomaine} contenu={contenubigdomaine} titre={titredomaine}/>
     </main>
     <Footer logos={logosArray}/>
    </>
  )
}

export default App

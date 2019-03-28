import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="heroGroup">
        <h1>Apprendre à <br />coder des applications avec Javascript</h1>
        <p>Apprennez le langage le plus populaire du moment !</p>
        <Link to="/page-2/">Regarder la vidéo</Link>
        <div className="logos">
          <img src={require('../../public/static/images/logo-sketch.png')} width="50" />
          <img src={require('../../public/static/images/logo-js.png')} width="50" />
          <img src={require('../../public/static/images/logo-visual-studio-code.png')} width="50" />
          <img src={require('../../public/static/images/logo-react.png')} width="50" />
          <img src={require('../../public/static/images/logo-nodejs.png')} width="50" />
          <img src={require('../../public/static/images/logo-npm.png')} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="cards">
      <div className="cardGroup">
      <h2>1 cours, 20 heures pour maîtriser Javascript</h2>
      <Card title="Pourquoi envisager d'étudier JS ?"
            text="Les bonnes raisons enfin expliquées"
            image={require('../../public/static/images/wallpaper.jpg')}
            />
      <Card title="Comment appréhender ce cours"
            text="Les bonnes pratiques"
            image={require('../../public/static/images/wallpaper2.jpg')}
            />
      <Card title="Débutant ?"
            text="Pas de panique"
            image={require('../../public/static/images/wallpaper3.jpg')}
            />
      <Card title="Notre premier programme"
            text="Salamou 'aleykoom world !"
            image={require('../../public/static/images/wallpaper4.jpg')}
            />
      <Card title="Les String avec Javascript"
            text="On rentre enfin dans le bain"
            image={require('../../public/static/images/wallpaper.jpg')}
            />
      </div>
    </div>
    <Section 
          image={require('../../public/static/images/wallpaper2.jpg')}
          logo={require('../../public/static/images/logo-js.png')}
          title="Javascript pour l'avenir" 
          text="Apprennez à faire des applications et sites webs grâce à la puissance de Javascript, le langage le plus populaire du moment!
          Devenez familier avec l'éco-système Javascript qui est utilisé par toutes les plus grandes entreprises du monde.
          Apprennez à construire des interfaces réactives, intelligentes et répondant à l'interaction avec l'utilisateur."
/>

  </div>
)

export default IndexPage

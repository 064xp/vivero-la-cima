import React from "react"
import { Link } from "gatsby"

import ScrollAnimation from 'react-animate-on-scroll'
import '../components/animate.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "../components/BackgroundImage"
import ContactSection from '../components/contact'
import Footer from '../components/Footer'
import SCarousell from '../components/squareCarousell'
import carousellImages from '../components/imagesObj'

class IndexPage extends React.Component {

  constructor(props){
      super(props);
      this.contact = React.createRef();
  }

  onHeroClick(){
    window.scrollTo({top: this.contact.current.offsetTop - 44, behavior: 'smooth'});
  }

  render () {
    return(
      <Layout>
        <SEO title="Home" keywords={[`vivero la cima`, `vivero`, `vivero guadalajara`]} />

        <BackgroundImage src="hero" className="hero is-fullheight">
          <a id="inicio"></a>
            <div className="hero-body">
              <div className="container center">
                <div className="has-text-centered">
                  <h1 className="title has-text-white hero-title has-text-weight-normal is-size-1-mobile">Vivero la Cima</h1>
                  <h2 className="subtitle has-text-light has-text-weight-normal is-size-6-mobile">Lo mejor en jardinería para tu espacio</h2>
                  <button
                    onClick={this.onHeroClick.bind(this)}
                    href="#"
                    className="button is-primary"
                    style={{background: '#3DAE4B'}}
                    >Nuestra Ubicación
                  </button>
                </div>
              </div>
            </div>
            <div className="hero-foot">
              <figure className="image is-24x24 hero-icons">
                <a href="https://www.facebook.com/lacimazap/" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M448 57v398c0 14-11 25-25 25H309V307h58l9-68h-67v-43c0-20 5-33 34-33h35v-61l-52-2c-51 0-87 31-87 89v50h-58v68h58v173H25c-14 0-25-11-25-25V57c0-14 11-25 25-25h398c14 0 25 11 25 25z"/></svg></a>
              </figure>
              <figure className="image is-24x24 hero-icons">
                <a href="https://www.instagram.com/viverolacima/" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8a26.8 26.8 0 1 1 26.8-26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388a75.63 75.63 0 0 1-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9A75.63 75.63 0 0 1 49.4 388c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1A75.63 75.63 0 0 1 92 81.2c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9a75.63 75.63 0 0 1 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
              </figure>
            </div>
          </BackgroundImage>

        <section className="section icl-section">
          <div id="seleccion"></div>
          <div className="container">
              <div className="sec2-layer" style={{margin: '0'}}>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                  <div className="content sec2-content" style={{marginTop: '0'}}>
                    <p className="title">Plantas</p>
                    <p className="subtitle is-size-6-mobile">Ofrecemos una gran variedad de plantas para adornar todo tipo de espacio.</p>
                    <Link to="/galeria" className="button is-success is-rounded" style={{background: '#3DAE4B'}}>Ver Nuestra Galería</Link>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                  <SCarousell items={carousellImages}/>
                </ScrollAnimation>
              </div>
            <div className="sec2-layer" style={{flexWrap: 'wrap-reverse'}}>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                <BackgroundImage className="sec2-images" src="paisajismo" />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="content sec2-content">
                  <p className="title">Paisajismo</p>
                  <p className="subtitle is-size-6-mobile">Servicio de paisajismo para tus jardines y áreas verdes</p>
                </div>
              </ScrollAnimation>
            </div>
            <div className="sec2-layer">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="content sec2-content">
                  <p className="title">Productos</p>
                  <p className="subtitle is-size-6-mobile">Tenemos productos y accesorios como macetas, abono y tierra de encino.</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                <BackgroundImage className="sec2-images" src="macetaMadera" />
              </ScrollAnimation>
            </div>
            <div className="sec2-layer" style={{flexWrap: 'wrap-reverse'}}>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                <BackgroundImage className="sec2-images" src="carro" />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="content sec2-content">
                  <p className="title">Servicio a Domicilio</p>
                  <p className="subtitle is-size-6-mobile">Hacemos entregas a domicilio para pedidos grandes y de mayoreo</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        <a id="contacto" ref={this.contact}>
          <ContactSection />
        </a>
        <Footer />
      </Layout>

    );
  }
}

export default IndexPage;

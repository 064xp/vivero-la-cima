import React from 'react'
import './footer.css'

class Footer extends React.Component {

  getYear(){
    var date = new Date();
    return(date.getFullYear());
  }

  render () {
    return (
      <footer>
          <div class="footer-all-rights">
            <p>{this.getYear()} Vivero la Cima&#174; </p>
            <p>Todos los derechos reservado</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.8 39.2"><path d="M0 38l19.6-23.5 11.2 2.6L46 0l8.8 8.6 2.4-1.8 12.3 13.4 15.9-8.8 11 8.8 5.5-3.5 17 14.5-16.6-9.6 2 8.8-19-16.1-11 6.6 8 17.2-25-27.5-3 2.2L45.8 5 27.3 39 29.5 20l-10-2.5z"/></svg>

          <div class="footer-contact">
            <h2>Contacto</h2>
            <p>Cel  (33) 2040-7265</p>
            <p>viverolacima@gmail.com</p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/lacimazap/" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 57v398c0 14-11 25-25 25H309V307h58l9-68h-67v-43c0-20 5-33 34-33h35v-61l-52-2c-51 0-87 31-87 89v50h-58v68h58v173H25c-14 0-25-11-25-25V57c0-14 11-25 25-25h398c14 0 25 11 25 25z"/></svg>
              </a>
              <a href="https://www.instagram.com/viverolacima/" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8a26.8 26.8 0 1 1 26.8-26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388a75.63 75.63 0 0 1-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9A75.63 75.63 0 0 1 49.4 388c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1A75.63 75.63 0 0 1 92 81.2c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9a75.63 75.63 0 0 1 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer;

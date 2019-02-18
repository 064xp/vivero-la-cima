import React from 'react'
import './contact.css'

const ContactSection = (props) => {
  return (
    <section className="contact-section">
        <div className="contact-title">
          <p className="is-marginless title has-text-white has-text-weight-normal" >¡Contáctanos!</p>
        </div>
          <div className="contact-info">
            <div className="contact-items">
              <div className="contact-item">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.3 501.7C27 291 0 269.4 0 192a192 192 0 1 1 384 0c0 77.4-27 99-172.3 309.7a24 24 0 0 1-39.4 0zM192 272a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"/></svg>
                <p>
                  Av. Arco Pertinax #1478
                  Esquina Av. La Cima
                </p>
              </div>
              <div className="contact-item">
                <svg style={{width: '2em'}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8a6 6 0 0 1 9.7 4.7V400a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V195.6a6 6 0 0 1 9.7-4.7c22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7A24 24 0 0 0 512 131v-19a48 48 0 0 0-48-48H48a48 48 0 0 0-48 48v19a24 24 0 0 0 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
                <p>
                  viverolacima@gmail.com
                </p>
              </div>
              <div className="contact-item" style={{margin: '0'}}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24a24.2 24.2 0 0 0-27.5 13.9l-48 112a24 24 0 0 0 6.9 28l60.6 49.6a370.6 370.6 0 0 1-177.2 177.2l-49.6-60.6a24 24 0 0 0-28-6.9l-112 48a24.3 24.3 0 0 0-14 27.6l24 104A24 24 0 0 0 48 512 464 464 0 0 0 512 48a24 24 0 0 0-18.6-23.4z"/></svg>
                <p>
                  33 2040-7265
                </p>
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://www.facebook.com/lacimazap/" target="_blank" rel="noopener noreferrer">
                <div className="contact-social" style={{marginBottom: '10px'}}>
                  <p>@lacimazap</p>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M448 57v398c0 14-11 25-25 25H309V307h58l9-68h-67v-43c0-20 5-33 34-33h35v-61l-52-2c-51 0-87 31-87 89v50h-58v68h58v173H25c-14 0-25-11-25-25V57c0-14 11-25 25-25h398c14 0 25 11 25 25z"/></svg>
                </div>
              </a>
              <a href="https://www.instagram.com/viverolacima/" target="_blank" rel="noopener noreferrer">
                <div className="contact-social">
                  <p>@viverolacima</p>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8a26.8 26.8 0 1 1 26.8-26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388a75.63 75.63 0 0 1-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9A75.63 75.63 0 0 1 49.4 388c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1A75.63 75.63 0 0 1 92 81.2c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9a75.63 75.63 0 0 1 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </div>
              </a>
            </div>
          </div>
      <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.1068514708027!2d-103.41376498553139!3d20.74646280273233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af7d0fb19925%3A0x22603dd7dbeec79f!2sVIVERO+LA+CIMA!5e0!3m2!1sen!2smx!4v1550208480669" frameBorder="0" allowFullscreen></iframe>
    </section>
  )
}

export default ContactSection;

import React, { Component } from 'react'

import '../../css/contact.css';
export default class Contact extends Component {
    render() {
        return (
            <div className="section-one">
      <div className="wrapper">
          <div className="map">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.286852552595!2d20.46146321507345!3d44.81572047909863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab1997f274b%3A0x66a11409aac586e4!2sMakedonska%2021%2C%20Beograd!5e0!3m2!1sen!2srs!4v1590998754901!5m2!1sen!2srs"></iframe>
              <div className="location-adress">
                  <div className="location">
                      <div className="left-contact">
                          <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="right-contact">
                          <div className="top-text">Lokacija</div>
                          <div className="botton-text">Makedonska 21,11000, Beograd</div>
                      </div>
                  </div>
                  <div className="adress">
                      <div className="left-contact">
                          <i className="fa fa-envelope"></i>
                      </div>
                      <div className="right-contact">
                          <div className="top-text">Email Adresa</div>
                          <div className="bottom-text">
                              <a href="mailto:contact@levijatan.org">
                                  contact@levijatan.org
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="form">
              <form>
                  <div className="form-title">
                      <p>Kontaktirajte nas</p>
                  </div>
                  <div className="inputs">
                      <div className="input">
                          <p>Ime</p>
                          <input type="text" placeholder="Ваше име"/>
                      </div>
                      <div className="input">
                          <p>Email</p>
                          <input type="text" placeholder="Емаил адреса"/>
                      </div>
                      <div className="input">
                          <p>Naslov</p>
                          <input type="text" placeholder="Наслов поруке"/>
                      </div>
                  </div>
                  <div className="message-box">
                      <textarea placeholder="Ваша порука"></textarea>
                  </div>
                  <div className="btn">
                      <button>POŠALJI PORUKU</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
        )
    }
}


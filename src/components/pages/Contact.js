import React, { Component } from 'react'

import '../../css/contact.css';
export default class Contact extends Component {
    render() {
        return (
            <div class="section-one">
      <div class="wrapper">
          <div class="map">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.286852552595!2d20.46146321507345!3d44.81572047909863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab1997f274b%3A0x66a11409aac586e4!2sMakedonska%2021%2C%20Beograd!5e0!3m2!1sen!2srs!4v1590998754901!5m2!1sen!2srs"></iframe>
              <div class="location-adress">
                  <div class="location">
                      <div className="left-contact">
                          <i class="fa fa-map-marker"></i>
                      </div>
                      <div className="right-contact">
                          <div class="top-text">Локација</div>
                          <div class="botton-text">Македонска 21,11000, Београд</div>
                      </div>
                  </div>
                  <div class="adress">
                      <div className="left-contact">
                          <i class="fa fa-envelope"></i>
                      </div>
                      <div className="right-contact">
                          <div class="top-text">Емаил Адреса</div>
                          <div class="bottom-text">
                              <a href="mailto:contact@levijatan.org">
                                  contact@levijatan.org
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="form">
              <form>
                  <div class="form-title">
                      <p>Контактирајте нас</p>
                  </div>
                  <div class="inputs">
                      <div class="input">
                          <p>Име</p>
                          <input type="text" placeholder="Ваше име"/>
                      </div>
                      <div class="input">
                          <p>Емаил</p>
                          <input type="text" placeholder="Емаил адреса"/>
                      </div>
                      <div class="input">
                          <p>Наслов</p>
                          <input type="text" placeholder="Наслов поруке"/>
                      </div>
                  </div>
                  <div class="message-box">
                      <textarea placeholder="Ваша порука"></textarea>
                  </div>
                  <div class="btn">
                      <button>ПОШАЉИ ПОРУКУ</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
        )
    }
}


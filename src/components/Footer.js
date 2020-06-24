import React from 'react';
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
    <div className="l-footer">
      <h1>О НАМА</h1>
      <p>
        ЛЕВИЈАТАН ЈЕ НАСТАО У ГЛАВИ И СРЦУ ЕНТУЗИЈАСТЕ КАО ИДЕЈА "СНАЖНОГ ЧОВЕКА" КОЈИ ШТИТИ СЛАБИЈЕ ОД СЕБЕ. ПОЧЕЛО
        ЈЕ НЕЗВАНИЧНО 2015. ГОДИНЕ, ПРЕКО ЗВАНИЧНО РЕГИСТРОВАНЕ ФОНДАЦИЈЕ ЗА ЗАШТИТУ ЖИВОТИЊА "ФОНДАЦИЈА ПОКРЕТ
        ЛЕВИЈАТАН" 2018. ГОДИНЕ, ДО УДРУЖЕЊА "ПОКРЕТ ЛЕВИЈАТАН СРБИЈА" ОСНОВАНОГ 2019. ГОДИНЕ.
      </p>
    </div>
    <ul className="r-footer ">
      <li>
        <h2>ПРЕТРАЖИ</h2>
        <ul className="box">
          <li><a href="about.html">О НАМА</a></li>
          <li><a href="program.html">ПРОГРАМ</a></li>
          {/* <!-- <li><a href="/video-arhiva">ВИДЕО АРХИВА</a></li> --> */}
          <li><a href="contact.html">КОНТАКТ</a></li>
        </ul>
      </li>

      <li className="footer-fb-page">
        <div className="fb-page" data-href="https://www.facebook.com/pasazot/" data-tabs="" data-width="" data-height="200"
          data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/pasazot/" className="fb-xfbml-parse-ignore"><a
              href="https://www.facebook.com/pasazot/">Pavle Bihali</a></blockquote>
        </div>
      </li>
    </ul>

    <div className="b-footer">
      <p>All rights Reserved by &copy; Levijatan 2020 </p>
    </div>
  </footer>
  
    );
}

export default Footer;

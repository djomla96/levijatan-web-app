import React from 'react';
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
    <div className="l-footer">
      <h1>O NAMA</h1>
      <p>
      LEVIJATAN JE NASTAO U GLAVI I SRCU ENTUZIJASTE KAO IDEJA "SNAŽNOG ČOVEKA" KOJI ŠTITI SLABIJE OD SEBE. POČELO
        JE NEZVANIČNO 2015. GODINE, PREKO ZVANIČNO REGISTROVANE FONDACIJE ZA ZAŠTITU ŽIVOTINjA "FONDACIJA POKRET
        LEVIJATAN" 2018. GODINE, DO UDRUŽENjA "POKRET LEVIJATAN SRBIJA" OSNOVANOG 2019. GODINE.
      </p>
    </div>
    <ul className="r-footer ">
      <li>
        <h2>PRETRAŽI</h2>
        <ul className="box">
          <li><a href="/o-nama/srl">O NAMA</a></li>
          <li><a href="/program-pokreta/srl">PROGRAM</a></li>
          {/* <!-- <li><a href="/video-arhiva">ВИДЕО АРХИВА</a></li> --> */}
          <li><a href="/kontakt/srl">KONTAKT</a></li>
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

import React, { Component } from 'react'
import '../../css/program.css';
import ProgramCard from '../programCard';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpeg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';
import img6 from '../../images/6.jpg';
import img7 from '../../images/7.jpg';
import img8 from '../../images/8.jpg';
import img9 from '../../images/9.jpg';
import img10 from '../../images/10.jpg';

export default class Program extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="title">ПРОГРАМ</div>
            
                <div className="program-card-container">
                        <ProgramCard 
                            cardText="Životinja je osećajno biće i takav status mora biti definisan i predviđen zakonima republike Srbije.
                            Zalagaćemo se za doslednu primenu svih zakona i propisa u oblasti zaštite životinja."
                            img={img1}
                            />
                        <ProgramCard 
                            cardText="Strože kazne za zlostavljače, nasilnike, pedofile i silovatelje."
                            img={img2}
                            />
                        <ProgramCard 
                            cardText="Sloboda izbora kod vakcinacija, kao i pravo na dostupnost svih informacija u vezi sa konkretnom
                            vakcinom, naročito informacije o njenom poreklu, sastavu i neželjenim dejstvima."
                            img={img3}
                            />
                        <ProgramCard 
                            cardText="Posebna prava i poseban porgram inkluzije je za decu sa autizmom, što uključuje kontinuirano prisustvo
                            i praćenje od strane stručnih lica posebno obučenih za rad ovom decom."
                            img={img4}
                            />
                        <ProgramCard 
                            cardText="Pravo na lečenje pod jednakim uslovima za sve obolele od multiple skleroze ali i drugih teških i
                            nespecifičnih bolesti."
                            img={img5}
                            />
                        <ProgramCard 
                            cardText="Program sigurne kuće za sve žrtve nasilja. Kao i hitna pomoć svim ugroženim kategorijama."
                            img={img6}
                            />
                        <ProgramCard 
                            cardText="Stop nepotizmu, partokratiji i nestručnosti u svim segmentima društva."
                            img={img7}
                            />
                        <ProgramCard 
                            cardText="Očuvanje porodice, porodičnih vrednosti i srpske tradicije. Protiv istopolnih brakova i usvajanja dece
                            u takvim brakovima."
                            img={img8}
                            />
                        <ProgramCard 
                            cardText="Stop ilegalnim migrantima i naseljavanju istih na teritoriji RS."
                            img={img9}
                            />
                        <ProgramCard 
                            cardText="Zabrana rada nevladinih organizacija čiji su programi i aktivnosti suprotni interesima Republike
                            Srbije, njenih državljana i srpskog naroda."
                            img={img10}
                            />
                            
                </div>
            </div>
        )
    }
}


import React, { Component } from 'react'
import '../../css/program.css';
import ProgramCard from '../programCard';

export default class Program extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="title">PROGRAM</div>
            
                <div className="program-card-container">
                    <ProgramCard 
                        cardText={() => <p><span>Strože kazne</span> za zlostavljače, nasilnike, pedofile i silovatelje.</p>}
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Životinja</span> je osećajno biće i takav status mora biti definisan i predviđen zakonima republike Srbije.
                            Zalagaćemo se za doslednu primenu svih zakona i propisa u oblasti zaštite životinja.
                            </p>}
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Stop</span> ilegalnim migrantima i naseljavanju istih na teritoriji RS.</p>}
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Sloboda</span> izbora kod vakcinacija, kao i pravo na dostupnost svih informacija u vezi sa konkretnom
                            vakcinom, naročito informacije o njenom poreklu, sastavu i neželjenim dejstvima.</p>}
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Zabrana rada</span> nevladinih organizacija čiji su programi i aktivnosti suprotni interesima Republike
                            Srbije, njenih državljana i srpskog naroda.</p>}
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Pravo</span> na lečenje pod jednakim uslovima za sve obolele od multiple skleroze ali i drugih teških i
                            nespecifičnih bolesti.</p>}
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Posebna prava</span> i poseban program inkluzije za decu sa autizmom, što uključuje kontinuirano prisustvo
                            i praćenje od strane stručnih lica posebno obučenih za rad ovom decom.</p> }
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Program</span> sigurne kuće za sve žrtve nasilja. Kao i hitna pomoć svim ugroženim kategorijama.</p>}
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Stop</span> nepotizmu, partokratiji i nestručnosti u svim segmentima društva.</p>}
                        />
                    <ProgramCard 
                        cardText={() => <p><span>Očuvanje</span> porodice, porodičnih vrednosti i srpske tradicije. Protiv istopolnih brakova i usvajanja dece
                            u takvim brakovima.</p>}
                        />
                </div>
            </div>
        )
    }
}


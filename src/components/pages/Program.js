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
                            cardText={() => <p><span>Животиња</span> је осећајно биће и такав статус мора бити дефинисан и предвиђен законима републике Србијe.
                                Залагаћемо се за доследну примену свих закона и прописа у области заштите животиња.
                            </p>}
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Забрана рада</span> невладиних организација чији су програми и активности супротни интересима Републике
                                Србије, њених држављана и српског народа.
                            </p>}
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Слобода</span> избора код вакцинација, као и право на доступност свих информација у вези са конкретном
                                вакцином, нарочито информације о њеном пореклу, саставу и нежељеним дејствима.</p>}
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Право</span> на лечење под једнаким условима за све оболеле од мултипле склерозе али и других тешких и
                                неспецифичних болести.</p>}
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Посебна права</span> и посебан програм инклузије за децу са аутизмом, што укључује континуирано присуство
                                и праћење од стране стручних лица посебно обучених за рад овом децом.</p>   }
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Програм</span> сигурне куће за све жртве насиља. Као и хитна помоћ свим угроженим категоријама.</p>}
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Стоп</span> непотизму, партократији и нестручности у свим сегментима друштва.</p>}
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Очување</span> породице, породичних вредности и српске традиције. Против истополних бракова и усвајања деце
                                у таквим браковима.</p>}
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Стоп</span> илегалним мигрантима и насељавању истих на територији РС.</p>}
                            />
                        <ProgramCard 
                            cardText={() => <p><span>Строже  казне</span> за злостављаче, насилнике, педофиле и силоватеље.</p>}
                            />
                            
                </div>
            </div>
        )
    }
}


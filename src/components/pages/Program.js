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
            <div class="wrapper">
                <div class="title">ПРОГРАМ</div>
            
                <div class="program-card-container">
                        <ProgramCard 
                            cardText="Животиња је осећајно биће и такав статус мора бити дефинисан и предвиђен законима републике Србијe.Залагаћемо се за доследну примену свих закона и прописа у области заштите животиња."
                            img={img1}
                            />
                        <ProgramCard 
                            cardText="Строже казне за злостављаче, насилнике, педофиле и силоватеље."
                            img={img2}
                            />
                        <ProgramCard 
                            cardText="Слобода избора код вакцинација, као и право на доступност свих информација у вези са конкретном
                            вакцином, нарочито информације о њеном пореклу, саставу и нежељеним дејствима."
                            img={img3}
                            />
                        <ProgramCard 
                            cardText="Посебна права и посебан порграм инклузије је за децу са аутизмом, што укључује континуирано присуство
                            и праћење од стране стручних лица посебно обучених за рад овом децом."
                            img={img4}
                            />
                        <ProgramCard 
                            cardText="Право на лечење под једнаким условима за све оболеле од мултипле склерозе али и других тешких и
                            неспецифичних болести."
                            img={img5}
                            />
                        <ProgramCard 
                            cardText="Програм сигурне куће за све жртве насиља. Као и хитна помоћ свим угроженим категоријама."
                            img={img6}
                            />
                        <ProgramCard 
                            cardText="Стоп непотизму, партократији и нестручности у свим сегментима друштва."
                            img={img7}
                            />
                        <ProgramCard 
                            cardText="Очување породице, породичних вредности и српске традиције. Против истополних бракова и усвајања деце
                            у таквим браковима."
                            img={img8}
                            />
                        <ProgramCard 
                            cardText="Стоп илегалним мигрантима и насељавању истих на територији РС."
                            img={img9}
                            />
                        <ProgramCard 
                            cardText="Забрана рада невладиних организација чији су програми и активности супротни интересима Републике
                            Србије, њених држављана и српског народа."
                            img={img10}
                            />
                            
                </div>
            </div>
        )
    }
}


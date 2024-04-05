import React from 'react'
import CatNavbar from '../components/CatNavbar'
import "../css/who.css"
import CatProfile from '../components/CatProfile';
import CatSleeping from '../components/CatSleeping';
import StudiesCard from '../components/StudieCard';
import logo from "../images/pfp.png";
import uge from "../images/uge.png";
import vdg from "../images/vdg.png";
import caseware from "../images/caseware.png";

import axios from "../images/axios.png";
import react from "../images/react.png";
import ts from '../images/ts.png';
import js from "../images/js.png";
import java from "../images/java.png";
import php from "../images/php.png";
import python from "../images/py.png";
import sc from "../images/styled-components.png"

import jira from "../images/jira.png";
import gh from "../images/github.svg";
import figma from "../images/figma.svg";
import sb from "../images/scenebuilder.png";
import android from "../images/android.jpg";

const Who = ({ setIsVisible }) => {

  React.useEffect(() => {
    setIsVisible(true);
  });

  let data = {
    comms : [
      "Actuellement grand admissible à l'école d'ingénieur ESIEE Paris, je recherche une alternance de 36 mois dans le domaine de l'informatique.",
    ],
    intro : [
      "Je suis un étudiant de 19 ans en troisième année d'un BUT en informatique, j'ai une passion profonde pour le développement front-end, la conception UX et l'art.",
      "Je prends plaisir à jouer à des jeux vidéo, et deux de mes préférés de tous les temps sont Persona 5 et Zelda. Je trouve que ces jeux offrent non seulement un moyen amusant et engageant de se détendre, mais ils m'inspirent également à penser de manière créative et à sortir des sentiers battus en matière de conception et de résolution de problèmes.",
    ],
    introTitle : "Qui suis-je ?",
    skillsTitle : "Mes Compétences",

    studies : [
      {
        title : "Caseware France",
        text : "Première expérience professionelle dans cette entreprise en alternance. Mes missions : développer et maintenir des applications cloud et desktop visant à aider les auditeurs dans leur travail.",
        date : "2022/2024",
        logo : caseware,
      },
      {
        title : "IUT de Marne la vallée",
        text : "C'est dans cet établissement que j'ai appris l'informatique et la vie d'entreprise grace à l'alternance. Etant en tête de promotion, je souhaite intergrer une grande école d'ingénieur par la suite.",
        date : "2021/2024",
        logo : uge,
      },
      {
        title : "Concours de mathématiques",
        text : "Pendant mon année de terminale, moi et mes camarades avions remporté un concours de maths. Nous avions conçu un objet permettant à des personnes malvoyantes, sourdes et muettes de faire des calculs et de les partager entre eux sans difficultés. Cet objet avait pour but premier de facilter les cours des professeurs.",
        date : "2020/2021",
        logo : vdg,
      },
      {
        title : "Lycée Van Dongen - Mention Bien",
        text : "J'ai étudié et obtenu mon bac avec mention dans ce lycée en filière générale avec comme spécialités les maths, la physique/chimie et la science de l'ingénieur ainsi qu'une option art.",
        date : "2018/2021",
        logo : vdg,
      }
    ],

  }

  return (
    <div className='whoCont'>
      <div className='WhoIntroCont'>
        <div className='WhoIntroImg'>
          <CatProfile />
        </div>

        <div className='WhoIntroText'>
          <h2 className='WhoIntroTextTitle'>
            { data.introTitle }
          </h2>
          {
            data.comms.map((item, i) => {
              return (
                <div className='WhoIntroTextComm' key={i}>
                  {item}
                </div>
              );
            })
          }
          {
            data.intro.map((item, i) => {
              return (
                <p key={i}>
                  {item}
                </p>
              );
            })
          }
        </div>
      </div>

      <div className='WhoSkillsCont'>
        <CatSleeping />
        <div className='WhoSkillsContent'>
          <h2 className='WhoSkillsTextTitle'>
            { data.skillsTitle }
          </h2>

          <div className='WhoSkillsList'>
            <div className='WhoSkillCont'>
              <h3 className='WhoSkillTitle'>
                Techno
              </h3>

              <ul className='WhoSkillList'>
                <li className='WhoSkillImg'>
                  <img src={react} alt='React' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={ts} alt='Typescript' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={js} alt='Javascript' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={sc} alt='styled-components' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={axios} alt='Axios' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={php} alt='PHP' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={python} alt='Python' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={java} alt='Java' />
                </li>
              </ul>   
            </div>

            <div className='WhoSkillCont'>
              <h3 className='WhoSkillTitle'>
                  Logiciels
              </h3>

              <ul className='WhoSkillList'>
                <li className='WhoSkillImg'>
                  <img src={figma} alt='figma' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={gh} alt='Github' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={sb} alt='Scene builder' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={android} alt='android studio' />
                </li>
                <li className='WhoSkillImg'>
                  <img src={jira} alt='jira softwares' />
                </li>
              </ul>  
            </div>

            <div className='WhoSkillCont'>
              <h3 className='WhoSkillTitle'>
                  Autres
              </h3>

              <ul className='WhoSkillClassicList'>
                <li>TOEIC : 970 / 990</li>
                <li>+10 ans de dessin</li>
                <li>Expérience en montage video</li>
                <li>Je sais résoudre un rubiks cube en 2 minutes</li>
              </ul>  
            </div>
          </div> 
        </div>
      </div>

      <div className='WhoStudiesCont'>
        <h2 className='WhoStudiesTitle'>Scolarité / Pro</h2>
      {
            data.studies.map((item, i) => {
              return (
                <StudiesCard logo={item.logo} title={item.title} date={item.date} text={item.text} />
              )
            })
          }    
      </div>
    </div>
  )
}

export default Who

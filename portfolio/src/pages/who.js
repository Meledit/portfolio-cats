import React from 'react'
import CatNavbar from '../components/CatNavbar'
import "../css/who.css"
import CatProfile from '../components/CatProfile';
import CatSleeping from '../components/CatSleeping';
import StudiesCard from '../components/StudieCard';
import logo from "../images/pfp.png"

const Who = ({ setIsVisible }) => {

  React.useEffect(() => {
    setIsVisible(true);
  });

  let data = {
    intro1 : "I'm a 19 year old student currently in my third year of a Bachelor's degree in Computer Science, and I have a deep passion for front-end development, UX design and art.",
    intro2 : "I enjoy playing video games, and two of my all-time favorites are Persona 5 and Zelda. I find that these games not only provide a fun and engaging way to unwind, but they also inspire me to think creatively and outside the box when it comes to design and problem-solving.",
    introTitle : "Who am I ?",
    skillsTitle : "My skills",
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
          <p>
            { data.intro1 }
          </p>
          <p>
            { data.intro2 }
          </p>
        </div>
      </div>

      <div className='WhoSkillsCont'>
        <CatSleeping />
        <div className='WhoSkillsContent'>
          <h2 className='WhoSkillsTextTitle'>
            { data.skillsTitle }
          </h2>

          <div className='WhoSkillsList'>
            
          </div> 
        </div>
      </div>

      <div className='WhoStudiesCont'>
        <StudiesCard logo={logo} title="Lycée Van Dongen - Mention Bien" date="2021/2002" text="paoééiurazyer zebzehzeuifbiuz iuz i_ziu  zirh izufz iuh aiu aiufnaui fuiafuieahf uiaf çafu iufhauifhiuafhuizehf iuzehf iuzef iuzehfuie hfuize iuf zeiuhfuizehfui" />
      </div>
    </div>
  )
}

export default Who

import React from 'react'
import "../css/projects.css"
import test from "../images/pfp.png";
import CatList from '../components/CatList';
import chronos from "../images/chronos-c.svg";
import chronos2 from "../images/chronos.png";
import froggle from "../images/froggle.png";
import froggle2 from "../images/froggle-big.png";

const Projects = ({ setIsVisible }) => {

    React.useEffect(() => {
        setIsVisible(true);
      });

      const [selected, setSelected] = React.useState(0);

      let data = [
        {
            img : chronos2,
            title : "Chronos",
            logo : chronos,
            text : "Création d'une plateforme permettant aux élèves, professeurs, secretaire et à toute l'équipe pédagogique de faciliter leur travail et de communiquer plus facilement. Elle permet de consulter son emploi du temps, ses notes, de justifier ses absences, etc ...",
            comp : [
                "React",
                "Styled components",
                "SQL",
                "Axios",
            ]
        },{
            img : froggle2,
            title : "Froggle",
            logo : froggle,
            text : "Version multijoueur du jeu de lettre 'boggle' mais avec des grenouilles partout !",
            comp : [
                "React",
                "PHP",
                "C",
                "Java",
                "Python"
            ]
        },{
            img : test,
            title : "Thèses viz",
            logo : test,
            text : "Application web permettant de visualiser les données de plus de 1000 thèses sous formes de graphiques et de tableaux. Toutes les données sont récuperées depuis thèses.fr à l'aide d'un script d'extraction.",
            comp : [
                "PHP",
                "SQL"
            ]
        }
      ];

  return (
    <div className='ProjectsCont'>
        <h2 className='ProjectsTitle'>My projects</h2>
        <div className='ProjectsContent'>
            <div className='PititsChatsCont'>
                <CatList lst={data} selected={selected} onSelect={(setSelected)} />
            </div>

            <div className='ProjectsInfoCont'>
                <div className='ProjectsInfoTitleCont'>
                    <h3 className='ProjectsInfoTitle'>{ data[selected].title }</h3>
                    <div className='ProjectsInfoTitleLinks'>
                        <a href=''>
                            <img src={data[selected].logo} />
                        </a>
                    </div>
                </div>

                <div className='ProjectsInfoTextCont'>
                    <ul className='ProjectsInfoTextComp'>
                        {
                            data[selected].comp.map((item, i) => {
                                return (
                                    <li>{ item }</li>
                                )
                            })
                        }
                    </ul>

                    <div className='ProjectsInfoText'>
                        { data[selected].text }
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Projects

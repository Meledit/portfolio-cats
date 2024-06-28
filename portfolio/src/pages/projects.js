import React from 'react'
import "../css/projects.css"
import test from "../images/pfp.png";
import CatList from '../components/CatList';
import chronos from "../images/chronos-c.svg";
import chronos2 from "../images/chronos.png";
import froggle from "../images/froggle.png";
import froggle2 from "../images/froggle-big.png";
import theses2 from "../images/theses.png"
import theses from "../images/theses-small.png";
import git from "../images/github-sign.png";

const Projects = ({ setIsVisible }) => {

    React.useEffect(() => {
        setIsVisible(true);
      });

      const [selected, setSelected] = React.useState(0);

      let data = [
        {
            img : chronos2,
            title : "Chronos",
            logo : [
                {
                    img : git,
                    link : "https://github.com/Meledit/chronos",
                },
                {
                    img : chronos,
                    link : "",
                }
            ],
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
            logo : [
                {
                    img : git,
                    link : "https://github.com/Meledit/Froggle",
                },
                {
                    img : froggle,
                    link : "",
                }
            ],
            text : "Version multijoueur du jeu de lettre 'boggle' mais avec des grenouilles partout ! Jouez des parties de 1 à 4 joueurs et essayez de trouver le plus de mots possible dans le temps impartit ! Montez de niveau et débloquez toutes les récompenses pour être le meilleur !",
            comp : [
                "React",
                "TypeScript",
                "PHP",
                "C",
                "Java",
                "Python"
            ]
        },{
            img : theses2,
            title : "Thèses viz",
            logo : [
                {
                    img : git,
                    link : "https://github.com/Meledit/Projet_Abes",
                },
                {
                    img : theses,
                    link : "",
                }
            ],
            text : "Application web permettant de visualiser les données de plus de 1000 thèses sous formes de graphiques et de tableaux. Toutes les données sont récuperées depuis thèses.fr à l'aide d'un script d'extraction.",
            comp : [
                "PHP",
                "SQL"
            ]
        }
      ];

  return (
    <div className='ProjectsCont'>
        <h2 className='ProjectsTitle'>Mes projets</h2>
        <div className='ProjectsContent'>
            <div className='PititsChatsCont'>
                <CatList lst={data} selected={selected} onSelect={(setSelected)} />
            </div>

            <div className='ProjectsInfoCont'>
                <div className='ProjectsInfoTitleCont'>
                    <h3 className='ProjectsInfoTitle'>{ data[selected].title }</h3>
                    <div className='ProjectsInfoTitleLinks'>
                    {
                        data[selected].logo.map((obj, i) => {
                            return (
                                <a target='_blank' href={obj.link}>
                                    <img src={obj.img} />
                                </a>
                            )
                        })
                    }
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

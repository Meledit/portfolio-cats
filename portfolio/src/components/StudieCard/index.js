import React from 'react';
import { StudiesCardTitleSubCont, StudiesCardCont, StudiesCardTitleDate, StudiesCardLogo, StudiesCardTextCont, StudiesCardTitle, StudiesCardTitleText } from './studiesCardElements';

const StudiesCard = ({ title, logo, date, text}) => {
  return (
    <StudiesCardCont>
        <StudiesCardTitle>
            <StudiesCardTitleSubCont>
                <StudiesCardLogo src={logo} />
                <StudiesCardTitleText>{ title }</StudiesCardTitleText>
            </StudiesCardTitleSubCont>

            <StudiesCardTitleDate>{ date }</StudiesCardTitleDate>
        </StudiesCardTitle>

        <StudiesCardTextCont>
            { text }
        </StudiesCardTextCont>
    </StudiesCardCont>
  )
}

export default StudiesCard

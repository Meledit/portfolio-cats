import React from 'react'
import { CatListCont, CatListSubCont, CatListSubContCat, CatListSubContImg } from './CatListElements'
import cat1 from "../../images/pitit-chat-mini-crotte-ferme.svg";
import cat2 from "../../images/pitit-chat-mini-crotte-ouvert.svg";

const CatList = ({ lst, onSelect, selected }) => {

  return (
    <CatListCont>
        {
          lst.map((item, i) => {
            return (
                <CatListSubCont selected={selected == i} i={i} onClick={() => onSelect(i)}>
                    <CatListSubContCat selected={selected == i} i={i} src={selected == i ? cat2 : cat1} />
                    <CatListSubContImg selected={selected == i} i={i} src={item.img} />
                </CatListSubCont>
            );
          })
        }
    </CatListCont>
  )
}

export default CatList

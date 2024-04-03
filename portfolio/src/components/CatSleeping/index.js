import React from 'react';
import { CatSleepingCont, CatSleepingImg, CatSleepingZ } from './catSleepingElements';
import catSleeping from "../../images/cat-sleepin.svg";

const CatSleeping = () => {
  return (
    <CatSleepingCont>
        <CatSleepingImg src={catSleeping} />
        <CatSleepingZ i={0}>Z</CatSleepingZ>
        <CatSleepingZ i={1}>Z</CatSleepingZ>
        <CatSleepingZ i={2}>Z</CatSleepingZ>
    </CatSleepingCont>
  )
}

export default CatSleeping

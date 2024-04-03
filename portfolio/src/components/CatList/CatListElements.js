import styled from "styled-components";


export const CatListCont = styled.div`
   width: 100%;
   max-width: 1500px;
   height: 100%;
   display: flex;
   align-items: flex-end;
   justify-content: center;
   gap: 10px;
   overflow: hidden;
`;

export const CatListSubCont = styled.div`
    max-width: 200px;
    width: 20%;
    height: fit-content;
    position: relative;
    user-select: none;
    cursor: pointer;
    transition: all 0.75s cubic-bezier(.58,2.08,.12,.71);
    transform: ${props => props.selected ? "translateY(10px) scale(1.2)" : "translateY(25%) scale(0.9)"};

    &:hover {
        transform: ${props => props.selected ? "translateY(10px) scale(1.2)" : "translateY(25%) scale(1.1)"};
    }
`;

export const CatListSubContCat= styled.img`
    width: 100%;
`;

export const CatListSubContImg = styled.img`
    width: 50%;
    aspect-ratio: 1;
    border: 4px solid #000;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 45%;
    transition: all 0.75s cubic-bezier(.58,2.08,.12,.71);
    transform: ${props => props.selected ? "translate(-50%, -50%) rotate(3deg) scale(1.1)" : "translate(-50%, 0)"};
`;
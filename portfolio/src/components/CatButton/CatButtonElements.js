import styled from 'styled-components';

export const CatButtonCont = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.25rem;

    color: ${props => props.isHovered ? "#fff" : "#000"};
    background: ${props => props.isHovered ? "#000" : "#fff"};
    border: 3px solid #000;
    border-radius: 1000px;

    width: fit-content;
    height: fit-content;

    padding: 5px 20px 5px 20px;

    cursor: pointer;
    user-select: none;
`;

export const CatButtonEar = styled.img`
    position: absolute;
    top: ${props => props.isHovered ? "0%" : "25%"};
    left: ${props => props.ear_side == "left" ? "15%" : "70%"};
    transform: ${props => props.isHovered ? "translateY(-90%)" : "translateX(0)"};
    z-index: -10;

    width: 20px;
    transition: all 0.2s cubic-bezier(.76,1.65,0,.92);
`;

export const CatButtonTail = styled.img`
    position: absolute;
    top: 0%;
    left: ${props => props.isHovered ? "90%" : "50%"};
    z-index: -10;

    width: 50px;
    transition: all 0.2s cubic-bezier(.76,1.65,0,.92);
`;
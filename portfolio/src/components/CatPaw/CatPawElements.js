import styled from "styled-components";

export const CatPawElem = styled.img`
    height: 50%;

    position: absolute;
    top: ${props => props.y + "%"};
    left: ${props => props.x + "%"};
    transform: translate(-125%, 0%);

    z-index: 999;
    transition: all 0.15s;
`;
import styled from "styled-components";

export const CatNavbarCont = styled.div`
    width: 100%;
    height: 16vh;
    padding: 0px 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
    top: 0;
    gap: 15px;
    z-index: 99999;
    ${props => props.isVisible ? "transform: translateY(0%)" : "transform: translateY(-100%)"};
    ${props => props.isVisible ? "position: sticky" : "position: absolute"};

    transition: all 1s cubic-bezier(.76,1.65,0,.92);
`;
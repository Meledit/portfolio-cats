import styled from "styled-components";

export const StudiesCardCont = styled.div`
    width: 100%;
    padding: 20px 25px;
    display: flex;
    border: 2px solid #000;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
`;

export const StudiesCardTitle = styled.div`
    height: fit-content;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StudiesCardTitleSubCont = styled.div`
    display: flex;
    gap: 20px;
`;

export const StudiesCardLogo = styled.img`
    width: 50px;
    height: 50px;
    font-size: 2rem;
`;

export const StudiesCardTitleText = styled.h2`
    width: fit-content;
    display: flex;
    align-items: center;
    font-size: 2rem;

    @media (max-width: 900px) {
        font-size: 1.5rem;
    }

    @media (max-width: 600px) {
        font-size: 1.25rem;
    }
`;

export const StudiesCardTitleDate = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    font-size: 2rem;

    @media (max-width: 900px) {
        font-size: 1.5rem;
    }

    @media (max-width: 600px) {
        font-size: 1.25rem;
    }
`;

export const StudiesCardTextCont = styled.div`
    width: 100%;
    text-indent: 10px;
    font-size: 1.25rem;

    @media (max-width: 900px) {
        font-size: 1rem;
    }
`;

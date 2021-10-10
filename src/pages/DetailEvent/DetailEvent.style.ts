import styled from "styled-components";

export const EventPictures = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 30px;
    overflow-x: scroll;
    border-radius: 10px;
    padding-bottom: 20px;
    > img {
        width: 117px;
        height: 117px;
        object-fit: fill;
    }
`;

export const EventDescription = styled.div`
    overflow-y: scroll;
    height: 300px;
    padding: 18px;
    border: 1px solid ${(props) => props.theme.borderPrimary};
    border-radius: 10px;

    > p {
        text-align: justify;
    }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    gap: 52px;
    padding-block: 30px;
`;

export const EventInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const EventPicture = styled.div`
    width: 455px;
    > .event-picture {
        width: 100%;
        object-fit: contain;
    }
`;

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

export const EventAction = styled.div`
    display: flex;
    align-self: flex-end;
`;

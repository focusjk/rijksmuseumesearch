import styled from 'styled-components';

export const Card = styled.div.attrs({
        backgroundColor: props => props.backgroundColor || 'white',
    })`
        width: 90%;
        padding:2vh 5% 2vh 5%;
        border-radius: 8px;
        display: flex;
        align-items: left;
        margin-bottom: 1vw;
        background-color: ${props => props.backgroundColor};
`;

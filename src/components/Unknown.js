import React from 'react';
import styled from 'styled-components';

const Unknown = () => {
    return (
        <Container>
            <img src="https://wpdaddy.com/wp-content/uploads/2017/04/Best-Coming-Soon-and-404-Error-Page-Templates-for-Your-Unique-Websites.jpg" alt="page not found" />
        </Container>
    )
}

export default Unknown;

const Container = styled.div`
display: flex;
background: #93D6CD;
justify-content: center;
align-items: center;
    img {
        height: 700px;
        width: auto;
    } 
`
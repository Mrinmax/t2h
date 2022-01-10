import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './Theme';
import Button from '@material-ui/core/Button';


function Navbar() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
                <Nav>
                    <img src="/images/t2hp.png" alt="t2h" />
                    <Search>
                        <input type="text" placeholder="Search content..." />
                    </Search>
                    <Dark>
                        <img src="/images/sun.svg" alt="" onClick={() =>themeToggler()} />
                    </Dark>
                </Nav>

            <Container>
                <Button type='submit' color='primary' fullWidth variant="contained" >New Model</Button>
                <Button type='submit' color='secondary' fullWidth variant="contained" >Trained Model</Button>
            </Container>
        </ThemeProvider>
    )
}

export default Navbar;

const Nav = styled.div`
    height: 70px;
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    display: flex;
    justify-content: space-between;

    img {
        width: 60px;
        padding-top: 5px;
        margin-left: 20px;
        margin-bottom: 5px;
        
    }

`

const Search = styled.div`
    padding-top: 15px;

    input {
        height: 5vh;
        width: 30vw;
        border-radius: 10px;
        outline: 1px solid transparent;
        font: 50px;
    }
    
`

const Dark = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;
    img {
        height: 24px;
        width: 24px;
        
    }
`

const Container = styled.div`
    color: ${(props) => props.theme.text};
    /* background: #c0c0c0; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 220px;
    padding-left: 600px;


    Button {
        width: 25%;
        margin: 5px;
        border-radius: 20px;
        justify-content: center;
    }

`

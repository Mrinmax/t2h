import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './Theme';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';


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
                        <h2>Text to Handwriting</h2>
                    </Search>
                    <Dark>
                        <img src="/images/sun.svg" alt="" onClick={() =>themeToggler()} />
                        <Main>
                          <Avatar />
                        </Main>
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
  h2 {
    font-size: 27px;
    font-weight: 900;
    color: #7C99AC;

    --x-offset: -0.0625em;
    --y-offset: 0.0625em;
    --stroke: 0.025em;
    --background-color: white;
    --stroke-color: lightblue;

    text-shadow: var(--x-offset) var(--y-offset) 0px var(--background-color),
      calc(var(--x-offset) - var(--stroke))
        calc(var(--y-offset) + var(--stroke)) 0px var(--stroke-color);
    }

  @supports (text-shadow: 1px 1px 1px 1px black) {
    h2 {
      text-shadow: var(--x-offset) var(--y-offset) 0px 0px
          var(--background-color),
        var(--x-offset) var(--y-offset) var(--stroke) 0px var(--stroke-color);
    }
  }
`;

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

const Main = styled.div`
    margin-left: 11px;
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

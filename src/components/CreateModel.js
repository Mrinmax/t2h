import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Paper } from '@material-ui/core';

function CreateModel() {
    const paperStyle ={ padding:20, height:'85vh', width:'70%', margin:'40px auto'}

    return (
        <Container>
            <Grid align="center">
                <Paper elevation={20} style={paperStyle}>
                    <h2>Please select a file </h2>
                    <input type="file" />
                    <Button type="submit"
                    color="secondary"
                    fullWidth
                    variant="contained"
                    >Upload File</Button>
                </Paper>
            </Grid>
     </Container>
    )
}

export default CreateModel;

const Container =styled.div`
    background-color: #F8F9FB;
    align-items: center;

    Button {
        width: 20%;
    }
`


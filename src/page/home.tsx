import Editor, { DiffEditor } from "@monaco-editor/react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { getInfo } from "../api";

const Home = () => {

    const handleOnchange = (value: any) => {
        console.log(value);
    };

    useEffect(() => {
        if(localStorage.getItem('sign-in') !== 'true'){
            window.location.replace('sign-in');
        }
    }, []);

    return (
        <Box >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box border={1}>
                        <Typography>asdasd</Typography>
                    </Box>
                </Grid>
                <Grid item border={1} xs={6}>
                    <Editor 
                        height={800}
                        defaultLanguage='typescript'
                        defaultValue="// you can do it"
                        onChange={handleOnchange}
                        language='typescript'
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;
import { Box, Button } from "@mui/material";
import { getInfo } from "../api";
import AceEditor from 'react-ace';

const Home = () => {
    const fetchInfo = () => {
        getInfo().then((res) => {
            console.log(res);
        })
    };

    const editOnChange = (value: any) => {
        console.log(value);
    };

    return (
        <Box>
            <Button onClick={fetchInfo}>
                fetch
            </Button>

            <AceEditor
                mode="java"
                theme="github"
                onChange={editOnChange}
                name="editor"
                editorProps={{
                    $blockScrolling: true
                }}
            ></AceEditor>
        </Box>
        
    )
}

export default Home;
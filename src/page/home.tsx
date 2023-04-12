import Editor, { DiffEditor } from "@monaco-editor/react";
import { Box, Button, Container, Divider, Grid, MenuList, Typography } from "@mui/material";
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

    const description = `<ul>
	<li><code>subtext<sub>i</sub></code><sub>&nbsp;</sub>是 <strong>非空&nbsp;</strong>字符串</li>
	<li>所有子字符串的连接等于 <code>text</code> ( 即<code>subtext<sub>1</sub>&nbsp;+ subtext<sub>2</sub>&nbsp;+ ... + subtext<sub>k</sub>&nbsp;== text</code>&nbsp;)</li>
	<li>对于所有 <font color="#c7254e"><font face="Menlo, Monaco, Consolas, Courier New, monospace"><span style="font-size:12.6px"><span style="background-color:#f9f2f4">i</span></span></font></font>&nbsp;的有效值( 即&nbsp;<code>1 &lt;= i&nbsp;&lt;= k</code> ) ，<code>subtext<sub>i</sub>&nbsp;== subtext<sub>k - i + 1</sub></code> 均成立</li>
</ul>`

    return (
        <Box>
            <Grid container spacing={1} padding={2}>
                <Grid item xs={6} >
                    <Box height='100%' border={1} borderColor='#f0f0f0' padding={2}>
                        <Box>
                            <Typography>1147. 段式回文</Typography>
                            <Divider></Divider>
                        </Box>
                        <Box marginTop={2}>
                            <div dangerouslySetInnerHTML={{__html : description}}></div>
                        </Box>
                        <Box>
                            <Box marginTop={2}>
                                <Typography>示例1: </Typography>
                                <Box bgcolor='#f2f2f4' padding={2}>
                                    <Typography>
                                        <b>输出：</b> text = "ghiabcdefhelloadamhelloabcdefghi"
                                    </Typography>
                                    <Typography>
                                        <b>输出:</b> 7
                                    </Typography>
                                    <Typography>
                                        <b>解释：</b>我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
                                    </Typography>
                                </Box>
                            </Box>
                            <Box marginTop={2}>
                                <Typography>示例2: </Typography>
                                <Box bgcolor='#f2f2f4' padding={2}>
                                    <Typography>
                                        <b>输出：</b> text = "ghiabcdefhelloadamhelloabcdefghi"
                                    </Typography>
                                    <Typography>
                                        <b>输出:</b> 7
                                    </Typography>
                                    <Typography>
                                        <b>解释：</b>我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
                                    </Typography>
                                </Box>
                            </Box>
                            <Box marginTop={2}>
                                <Typography>示例3: </Typography>
                                <Box bgcolor='#f2f2f4' padding={2}>
                                    <Typography>
                                        <b>输出：</b> text = "ghiabcdefhelloadamhelloabcdefghi"
                                    </Typography>
                                    <Typography>
                                        <b>输出:</b> 7
                                    </Typography>
                                    <Typography>
                                        <b>解释：</b>我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item  xs={6}>
                    <Box border={1} borderColor='#f0f0f0'>
                        <Editor 
                            height={800}
                            defaultLanguage='typescript'
                            defaultValue="// you can do it"
                            onChange={handleOnchange}
                            language='typescript'
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;
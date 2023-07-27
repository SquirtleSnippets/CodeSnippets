import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Sandpack, useSandpack, SandpackProvider } from "@codesandbox/sandpack-react";


const App = () => {
    return (
    <SandpackProvider>
    <MainContainer />
    </SandpackProvider>
  
    );
}
export default App;

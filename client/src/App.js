import React from 'react';
import { Stack, ThemeProvider } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import MainContainer from './components/MainContainer';
import RightPanel from './components/RightPanel/RightPanel';

const App = (props) => {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <Header/>
      <Stack direction="horizontal" gap={5}>
        <div><LeftPanel/></div>
        <div><MainContainer store={props.store} /></div>
        <div><RightPanel/></div>
      </Stack>
      </ThemeProvider>
  );
}

export default App;

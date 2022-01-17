import './App.css';
import Foot from './components/JSX/Foot';
import Head from './components/JSX/Head';
import Body from './components/JSX/Body';
import Project from './components/JSX/Project';
import Contact from './components/JSX/Contact';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
    <ParallaxProvider>
    <Head/>
    <Body/>
    <Project/>
    <Contact/>
    <Foot/>
    </ParallaxProvider>
    </>
  );
}

export default App;

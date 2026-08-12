import logo from './logo.svg';
import './App.css';
import Dog from './components/Dog';
import { Canvas } from '@react-three/fiber'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Images from './components/Images';
import Titles from './components/Titles';
import Information from './components/Information';
import Paragraphs from './components/Paragraphs';


function App() {
  return (
    <main>

      <Images/>

      <Canvas id = "canvas-elem" style = {{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex:1,
      }}>
        <Dog/>
      </Canvas>

      <section id='section-1'>
        <Navbar/>
        <Hero/>
      </section>
      
      <section id='section-2'>
        <Titles/>
      </section>
      
      <section id='section-3'>
        <Information/>
      </section>

      <section id = 'section-4'>
        <Paragraphs/>
      </section>

    </main>
  );
}

export default App;

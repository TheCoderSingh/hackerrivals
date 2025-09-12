import './App.css';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Sponsors from './components/Sponsors';
import { IconoirProvider } from 'iconoir-react';

function App() {
  return (
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      <div className="bg-gradient-main">
        <header>
          <Navbar />
        </header>

        <main className="flex-1">
          <Hero />
          <About />
          <FAQ />
          <Sponsors />
          <Register />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </IconoirProvider>
  );
}

export default App;

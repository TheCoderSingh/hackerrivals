import './App.css';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <FAQ />
        <Sponsors />
        <Register />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

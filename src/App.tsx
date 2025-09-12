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
  );
}

export default App;

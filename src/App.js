import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">


      <main>
        <Hero/>
        <Header />
        <About />
        <Portfolio/>
        <Contact/>
        <Footer />
      </main>

    </div>
  );
}

export default App;

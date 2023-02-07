import Navigation from "./components/Navigation";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

      <header className="App-header">
      </header>

      <main>
        <Navigation/>
        <div>
          <Home/>
          {/* <About/> */}
          {/* <Portfolio/> */}
          {/* <Contact/> */}
          {/* <Footer/> */}
        </div>
      </main>
      
    </div>
  );
}

export default App;

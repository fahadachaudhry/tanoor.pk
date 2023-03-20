import About from "./Pages/About";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Principles from "./Pages/Principles";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import Topnav from "./Pages/Topnav";

function App() {
  return (
    <div className="text-zinc-100 bg-zinc-900">
      <Topnav />
      <Hero />
      <About />
      {/* <Principles /> */}
      <Team />
      <Services />
      <Footer />
    </div>
  );
}

export default App;

import "swiper/css/bundle";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

import "./styles/App.css";
function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </Layout>
  );
}

export default App;

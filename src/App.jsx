import "swiper/css/bundle";
import {
  About,
  Client,
  Hero,
  Portfolio,
  Services,
  Team,
} from "./components/index";
import Layout from "./components/Layout/Layout";

import "./styles/App.css";
function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Client />
      <Team />
    </Layout>
  );
}

export default App;

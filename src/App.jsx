import "swiper/css/bundle";
import {
  About,
  Client,
  Hero,
  Portfolio,
  Pricing,
  Services,
  Team,
  Testimonial,
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
      <Testimonial />
      <Pricing />
    </Layout>
  );
}

export default App;

import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import "./styles/App.css";
function App() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}

export default App;

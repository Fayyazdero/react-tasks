import "./App.css";
import { Heading } from "./components/heading";
import { Para } from "./components/para";
import { Popular } from "./components/popular";
import { Processes } from "./components/processes";

function App() {
  return (
    <div className="App">
      <section className="process-section">
        <Heading title="Easy Simple " boldHeading="3 steps process"></Heading>
        <Para text="Join our community and let’s heal the world with your knowledge & earn rewards." />
        <Processes />
      </section>
      <section className="popular-section">
        <Heading className="popular-blogs-main-heading" title="Popular blogs"/>
        <Popular />
      </section>
    </div>
  );
}

export default App;

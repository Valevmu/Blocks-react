import "./styles/styles.scss";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { Subcontent } from "./components/Subcontent";
import { Advertisement } from "./components/Advertisement";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div className="container">
        <Navigation className="nav" />
        <Main className="main">
          <Subcontent />
          <Subcontent />
          <Subcontent />
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;

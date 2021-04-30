import "./App.scss";
import Header from "./components/Header/Header";
import Navigation from "./containers/Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <div className="app__background-mask"></div>
      <Navigation />
      <Header />
    </div>
  );
}

export default App;

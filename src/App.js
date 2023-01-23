import Home from "./Pages/Home";
import Header from "./components/Header";
import Articles from "./Pages/Articles";
import { Routes, Route } from "react-router-dom";
import ChartScreen from "./Pages/ChartScreen";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<Articles />} />
        <Route path="/chartscreen" element={<ChartScreen />} />
      </Routes>
    </>
  );
}

export default App;

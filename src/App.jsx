import { Route, Routes } from "react-router-dom";
import { Home, Quiz, QuizPlay } from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-primary-black overflow-hidden">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Quiz-play" element={<QuizPlay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

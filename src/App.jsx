import { Route, Routes } from "react-router-dom";
import { Home, Login, Quiz, QuizPlay } from "./pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-primary-black overflow-hidden">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Quiz-play" element={<QuizPlay />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

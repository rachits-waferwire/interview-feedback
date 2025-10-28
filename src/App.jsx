import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecruiterForm from "./pages/RecruiterForm";
import InterviewForm from "./pages/InterviewForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecruiterForm />} />
        <Route path="/interview/:id" element={<InterviewForm />} />
      </Routes>
    </Router>
  );
}

export default App;

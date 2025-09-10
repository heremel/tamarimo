import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginRegister/LoginRegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Page de connexion */}
        <Route path="/home" element={<HomePage />} /> {/* Page principale */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import LoginPage from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register";
import QueuesPage from "./pages/queues";
import QueuePage from "./pages/queue";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/queues" element={<QueuesPage />} />
          <Route path="/queue/:id" element={<QueuePage />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;

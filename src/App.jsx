import Inbox from "./Pages/Inbox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from './Pages/Messages'
import Register from './Pages/Register'
import Login from './Pages/Login'
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/messages" element={<Messages />} />
          <Route path="/" element={<Login />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

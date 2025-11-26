
import { Routes, Route } from "react-router-dom";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/otp" element={<Screen2 />} />
      </Routes>
  );
}

export default App;

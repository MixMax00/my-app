import './App.css';
import Master from './Componants/Admin/Master.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashborad" element={<Master />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import ProtectedRoute from './util/ProtectedRoute ';
import Master from './Componants/Admin/Master.js';
import Login from './Componants/Admin/Login/Login.js';
import Wellcome from './Componants/Frontend/Wellcome.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Wellcome />}>
         
         </Route>
        <Route path="/admin/login" element={<Login />}>
         
         </Route>
        
          <Route path='' element=''>
            <Route path='/admin/dashborad' element={
              <ProtectedRoute>
                  <Master />
              </ProtectedRoute>
      
            } />
          </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;

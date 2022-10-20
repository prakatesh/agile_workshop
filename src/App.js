import React from 'react'
import Home from './pages/Home/Home';
import { Routes, Route} from "react-router-dom";
import Navbar from './pages/Home/Navbar/Navbar';
import Signup from './pages/Sign up/Signup';
import Signin from './pages/Login/Signin';
import Tools from './pages/Detail/Tools';
import View from './pages/Detail/View';
const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/"  exact element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/tool"  element={<Tools />} />
          <Route path="/view"  element={<View />} />
        </Routes>
    </div>
  );
}

export default App
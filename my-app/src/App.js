import React from 'react';
import './App.css';
import Users from './componenets/users/Users';
import Menu from './componenets/layout/Menu';
import Useritem from './componenets/users/Useritem';




import { BrowserRouter as Router, Routes , Route,useParams } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="container">
          <Routes>

            <Route path="/users" element={<Users />} exact />
            <Route path="/users/:login" element={<Useritem />} exact />
            <Route element={<Users />} exact />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

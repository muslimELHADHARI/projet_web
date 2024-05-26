import React, { useState, } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/Page/Login';
import Signup from '../src/components/Signup';
import Blogs from './lol/Blogs';
import AddPost from '../src/components/AddPost';
import './App.css';
import Inscription from './Page/Inscription';
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Inscription" element={<Inscription/>} />
          <Route path="/bl" element={<Blogs/>}/>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-post" element={<AddPost user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

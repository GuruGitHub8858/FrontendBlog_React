import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PostBlogAdmin from './Components/PostBlogAdmin'
import GetBlogPost from './Components/GetBlogPost'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Footer from './Components/Footer';
import NavBar from './Components/Navigation/NavBar';
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/postblog' element={<PostBlogAdmin />} />
        <Route path='/getblog' element={<GetBlogPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

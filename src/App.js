import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import ToDoList from './component/ToDoList'
import Navigation from './component/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/todolist" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
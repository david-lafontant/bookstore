import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Header />
    <section className="content">
      <Routes>
        <Route path="/bookstore" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<Books />} />
      </Routes>
    </section>
  </Router>
);

export default App;

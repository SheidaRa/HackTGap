import React from 'react';
import './App.css';
import Accessibility from './components/Accessibility/Accessibility';
import Categories from './components/Categories/Categories';
import CategoryPage from './components/CategoryPage/CategoryPage';
import TopicPage from './components/TopicPage/TopicPage';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path="/" element={<Categories />} />

          {/* <Accessibility /> */}
          {/* TODO move Categories and Accessibility into Home component */}
          
          <Route path="/category" element={<CategoryPage />} />

          <Route path="/topic" element={<TopicPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

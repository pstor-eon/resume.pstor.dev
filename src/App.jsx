import React from 'react';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Experience />
      </main>
    </div>
  );
}

export default App; 
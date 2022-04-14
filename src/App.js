import React, { useState } from 'react';
// import logo from './logo.svg';
import Nav from './components/Nav';
import About from './components/About';
import './App.css';
import Gallery from './components/Gallery';


function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description: "Photos of grocery stores, food trucks, and other commercial projects"
    },
    { 
      name: "portraits", 
      descriptiion: "Portraits of people in my life"
    },
    {
      name: "food",
      description: "Delicious delicacies"
    },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beautify of nature"
    }
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>

    </div>
  );
}

export default App;

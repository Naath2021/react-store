import React from 'react'
import './scss/app.scss';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/cart/ItemListContainer';


function App() {
  return (
    <div className="App">
      <div id='home'>
        <Navbar />
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;

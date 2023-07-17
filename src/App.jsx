
import { text } from '@fortawesome/fontawesome-svg-core';
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar"
import Input from './components/input';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';


const App = () => {

  const onChange=(event)=>{
    const value=event.target.value;

  }
  return (
    <div>
      <Navbar />
      
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/Home' element={<ItemListContainer />}/>
        <Route path='/category' element={<h3>Aquí están los items por categorías</h3>}/>
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      
      
      

    </div>
  );
};

export default App;
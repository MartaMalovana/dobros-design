import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Saved from './pages/Saved';
import Works from './pages/Works';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import savedProducts from './json/saved.json';

function App() {
  return (
    <Routes>
      <Route path='/dobros-design' exact element={<Home />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/saved' element={<Saved />}/>
      <Route path='/works' element={<Works />}/>
      <Route path='/contacts' element={<Contacts />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;

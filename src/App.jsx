import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Saved from './pages/Saved';
import Works from './pages/Works';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} e/>
      <Route path='/products' element={<Products />}/>
      <Route path='/saved' element={<Saved />}/>
      <Route path='/works' element={<Works />}/>
      <Route path='/contacts' element={<Contacts />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;

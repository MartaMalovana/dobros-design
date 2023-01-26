import { useInView } from 'react-intersection-observer';
import {Up, Arrow} from './components/showProduct/ShowProduct.styled';
import {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import HashLoader from 'react-spinners/HashLoader';
import Header from './components/header/Header';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Saved = lazy(() => import('./pages/Saved'));
const Works = lazy(() => import('./pages/Works'));
const Contacts = lazy(() => import('./pages/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound'));

const override = {
  position: "absolute",
  top: "50%",
  left: "50%"
};


function App() {

  const { ref, inView, entry } = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0
  });
  
  const toTop = () => {
    window.scrollTo({top: 0, left: 0, "behavior": "smooth"});
  };
  
  return (
    <>
      <div ref={ref}>
        <Header />
      </div>
      <Routes>
        <Route path='/' exact element={<Suspense fallback={<HashLoader size={30} cssOverride={override}/>}><Home /></Suspense>}/>
        <Route path='/products' element={<Suspense fallback={<HashLoader size={30} cssOverride={override}/>}><Products /></Suspense>}/>
        <Route path='/saved' element={<Suspense><Saved /></Suspense>}/>
        <Route path='/works' element={<Suspense><Works /></Suspense>}/>
        <Route path='/contacts' element={<Suspense><Contacts /></Suspense>}/>
        <Route path='*' element={<Suspense><NotFound /></Suspense>}/>
      </Routes>
      {!inView && <Up onClick={toTop}><Arrow /></Up>}
    </>
  );
}

export default App;

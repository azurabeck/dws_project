import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchBands } from './services/bandsSlice';
import { Container } from './assets/styles/global';

// Organism imports
import Navbar from './components/organism/Navbar';

// Page imports
import BandInfo from './pages/BandInfo';
import Home from './pages/Home'

function App() {

  const dispatch = useDispatch()
  const bands = useSelector((state) => state.bands.bands);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { dispatch(fetchBands()) }, [dispatch]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };


  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />
      <Container>        
        <Routes>
            <Route path="/" element={<Home bands={bands} searchQuery={searchQuery} />}/>
            <Route path="/band/id/:id" element={<BandInfo bands={bands} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

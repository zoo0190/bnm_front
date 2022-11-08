import { Route, Routes } from 'react-router-dom';

import { Nav } from './Nav';

import { Home } from './components/Home';

function App() {
  return (
    <div className='App'>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

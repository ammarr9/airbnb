import React, { useState } from 'react';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';

function App() {
  const [activePage, setActivePage] = useState<'home' | 'property'>('home');
  
  return (
    <div className="App">
      {activePage === 'home' ? (
        <div onClick={() => setActivePage('property')}>
          <Home />
        </div>
      ) : (
        <PropertyDetail />
      )}
    </div>
  );
}

export default App;
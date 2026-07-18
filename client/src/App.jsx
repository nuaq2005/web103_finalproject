import React from 'react';
import { useRoutes } from 'react-router-dom';

// TODO: replace with real pages/components (Navigation, Home, Trips, TripDetails, etc.)
const App = () => {
  let element = useRoutes([
    { path: '/', element: <h1>Ramblr 🧳 — placeholder home page</h1> },
  ]);

  return (
    <div className="app">
      {element}
    </div>
  );
};

export default App;
// import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';

export const App = () => {
  return (
    // <div>hello</div>
    <main style={{ flex: '1' }}>
      <Outlet />
    </main>
  );
};

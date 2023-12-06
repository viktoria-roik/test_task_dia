import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { App } from './App';
import { PageNotFound } from './pages/notfound/PageNotFound';
import { HomePage } from 'pages/home/HomePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);

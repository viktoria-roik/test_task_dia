import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { App } from './App';
import { PageNotFound } from '../src/components/notfound/PageNotFound';


export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);

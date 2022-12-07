import React from 'react';
import './index.css';
import App from './App';
import About from './Components/About';
import reportWebVitals from './reportWebVitals';

import {createRoot} from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<App />} />
    <Route path='about' element={<About />} />
  </>
));

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

import './scss/index.css';

import reportWebVitals from './reportWebVitals';

// function App() {
//   return (
//     <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="portfolio" element={<Portfolio />} />
//             <Route path="resume" element={<Resume />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
  return (
    /*
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </HashRouter>
    */
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/guestbook" element={<Guestbook />} />
      </Routes>
    </BrowserRouter>
  );
}

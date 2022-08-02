import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Testimonials from './Testimonials';
import Navbar from "./Navbarr";

ReactDOM.render(<Navbar />, document.getElementById("navbarSupportedContent"));
ReactDOM.render(<Testimonials />, document.getElementById("press"));

ReactDOM.render(<App />, document.getElementById("pric"));

//import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactLocker from "react-component-locker";
require('react-dom');
var w:any = window;
w.React2 = require('react');
console.log(w.React1 === w.React2);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLocker pincode={"hardik009"}>
           <h1>WELCOME BRO</h1>
        </ReactLocker>
      </header>
    </div>
  );
}

export default App;

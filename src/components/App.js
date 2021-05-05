import React, { useState } from "react";
import AppRouter from 'components/Router';
import mybase from 'myBase'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div><AppRouter isLoggedIn={isLoggedIn}/></div>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
}

export default App;

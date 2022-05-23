import React, { useContext } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserProvider";

function Home() {
  const { setName } = useContext(UserContext);

  // onClick={}  === onclick
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>+</button> */}
        {/* <h1>{name}</h1> */}
        <input type='text' onChange={(event) => setName(event.target.value)} />
        <Link to='/product/1'>Produto 1</Link>
      </header>
    </div>
  );
}

export default Home;

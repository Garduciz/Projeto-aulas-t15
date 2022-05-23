import React, { useContext } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Creator from "./pages/Creator";

// useContext = Hook react

import { UserContext } from "./context/UserProvider";
//  UserContext = Contexto do usuário (criado)

export default () => {
  const { name } = useContext(UserContext);

  return (
    // BrowserRouter =  O pai de toda a instancia de rotas
    <BrowserRouter>
      <header>
        <h1>{name}</h1>
        {/* A = Hyper link  (navegar entre as paginas do site) */}
        <Link to='/about'>About</Link>
      </header>
      {/* Routes = O elemento que irá englobar as rotas */}
      <Routes>
        {/* Route = Nossa rota / path = caminho (link) / element = componente que será carregado */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route path='creators' element={<Creator />} />
        </Route>

        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

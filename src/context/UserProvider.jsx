import React, { createContext, useState } from "react";

// Instancia do contexto
export const UserContext = createContext("");

//  provedor do contexto
// children = componentes ou elementos Filhos
export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

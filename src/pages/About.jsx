import React, { useEffect, useState } from "react";
import useFetch from "../utils/fetchs";
import Title from "../components/Title";

function About() {
  const [itens, setItens] = useState([]);

  useEffect(async () => {
    const request = await useFetch();

    return setItens([...request.results]);
  }, []);

  return (
    <ul>
      {itens.map((item, index) => (
        <div key={index}>
          <Title text={item.name} />
        </div>
      ))}
    </ul>
  );
  //
}

export default About;

//  Primeiro Caso = Toda vez que renderizar a pagina
// useEffect(() => {
//   console.log("renderizou!");
// });

// Segundo caso = Somente na primeira renderização
// useEffect(() => {
//   console.log("Primero render");
// }, []);

// Terceiro Caso  = Na primeira renderização, E toda vez que o valor da dependência mudar
// useEffect(() => {
//   console.log("Primero render ou o estado mudou");
// }, [sum]);

import React from "react";

import { useParams } from "react-router-dom";

export default () => {
  //  let params = useParams() = Instancia
  let params = useParams();
  return (
    <div>
      <h1>produto de id = {params.id}</h1>
    </div>
  );
};

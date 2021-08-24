import React from "react";
import Context from "./Context";

function Provider({ children }) {
  const context = {};
  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;

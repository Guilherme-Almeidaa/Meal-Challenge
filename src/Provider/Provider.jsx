import React, { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const context = {
    isLoading,
    setIsLoading,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;

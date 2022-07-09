import React, { useState, createContext, useContext } from 'react';

const CocktailsContext = createContext();
const UpdateCocktailsContext = createContext();
export function useCocktailsContext() {
  return [useContext(CocktailsContext), useContext(UpdateCocktailsContext)];
}

// export function useCocktailsUpdate() {
//   return useContext(UpdateCocktailsContext);
// }

function CocktailsProvider({ children }) {
  const [data, setData] = useState({});

  return (
    <CocktailsContext.Provider value={data}>
      <UpdateCocktailsContext.Provider value={setData}>
        {children}
      </UpdateCocktailsContext.Provider>
    </CocktailsContext.Provider>
  );
}
export default CocktailsProvider;

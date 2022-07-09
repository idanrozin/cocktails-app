import React, { useState, createContext, useContext } from 'react';

const CocktailsContext = createContext();
const UpdateCocktailsContext = createContext();

export function useCocktailsContext() {
  return [useContext(CocktailsContext), useContext(UpdateCocktailsContext)];
}

function CocktailsProvider({ children }) {
  const [data, setData] = useState({});
  const [menuItems, setMenuItems] = useState({});

  function addMenuItem(itemId) {
    if (menuItems[itemId]) {
      return;
    }
    const menuItemsCopy = { ...menuItems };
    Object.values(data).some(({ drinks }) => {
      const item = drinks.find((a) => a.idDrink === itemId);
      if (item) {
        menuItemsCopy[itemId] = item;
        setMenuItems(menuItemsCopy);
        return true;
      }
      return false;
    });
  }

  function removeMenuItem(itemId) {
    if (!menuItems[itemId]) {
      return;
    }
    const menuItemsCopy = { ...menuItems };
    delete menuItemsCopy[itemId];
    setMenuItems(menuItemsCopy);
  }

  return (
    <CocktailsContext.Provider value={{ data, menuItems }}>
      <UpdateCocktailsContext.Provider
        value={{ setData, addMenuItem, removeMenuItem }}
      >
        {children}
      </UpdateCocktailsContext.Provider>
    </CocktailsContext.Provider>
  );
}
export default CocktailsProvider;

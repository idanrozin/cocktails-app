import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';
import S from './styles';

const ALCOHOLS = [
  'Vodka',
  'Gin',
  'Rum',
  'Whiskey',
  'Irish cream',
  'Scotch',
  'Cognac',
  'Ouzo',
  'Sambuca',
  'Brandy',
];
export default function Home() {
  const [data, setData] = useState({});
  const { get, response, loading, error } = useFetch(
    'https://www.thecocktaildb.com'
  );
  const getRandomAlcohols = (drinks, numberOfAlcohols = 10) => {
    const numOfAlcohol = Math.min(numberOfAlcohols, drinks.length - 1);
    const alcohols = [];
    // choose 10 random ingredients
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numOfAlcohol; i++) {
      const randChosenAlcohol = Math.round(
        Math.random() * (drinks.length - 1 - 0) + 0
      );
      alcohols.push(drinks[randChosenAlcohol].strIngredient1);
      drinks.splice(randChosenAlcohol, 1);
    }
    return alcohols;
  };
  const getQSArgs = (key) => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    return params[key]; // "some_value"
  };

  async function loadAlcohol() {
    let alcohols = [];
    if (getQSArgs('random')) {
      try {
        const alcoholTypes = await get('/api/json/v1/1/list.php?i=list');
        if (response.ok) {
          alcohols = getRandomAlcohols(alcoholTypes.drinks);
          console.log('alcohols :>> ', alcohols);
        } else {
          //
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alcohols = ALCOHOLS;
    }
    if (alcohols.length > 0) {
      console.log('alcohols :>> ', alcohols);
      const alcoholsRequests = alcohols.map((alc) =>
        get(`/api/json/v1/1/filter.php?i=${alc}`)
      );

      const allCocktails = await Promise.all(alcoholsRequests);
      const cocktailsObject = {};
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < allCocktails.length; i++) {
        cocktailsObject[alcohols[i]] = allCocktails[i].drinks.slice(0, 10);
      }
      console.log('allCocktails :>> ', cocktailsObject);
      setData(cocktailsObject);
    }
  }
  useEffect(() => {
    loadAlcohol();
  }, []);

  if (loading) {
    return <S.Wrapper>Loading... Please Wait</S.Wrapper>;
  }
  if (error) {
    console.log(error);
    return <S.Wrapper>Some</S.Wrapper>;
  }
  return (
    <S.Wrapper>
      {Object.entries(data).map(([key, value], i) => (
        <div key={i}>
          {key}
          {value.map((alc) => (
            <div key={alc.idDrink}>{alc.strDrink}</div>
          ))}
        </div>
      ))}
    </S.Wrapper>
  );
}

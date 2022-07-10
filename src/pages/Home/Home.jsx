import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useCocktailsContext } from '../../services/CocktailsContext';
import Section from '../../components/Section/Section.jsx';
import Card from '../../components/Card/Card.jsx';
import S from './styles';

const ALCOHOLS = [
  'Vodka',
  'Gin',
  'Rum',
  'Whiskey',
  'Irish cream',
  'Scotch',
  'Tequila',
  'Wine',
  'Brandy',
  'Bourbon',
];

const HomePage = () => {
  const [{ data }, { setData }] = useCocktailsContext();
  const { get, response, error } = useFetch('https://www.thecocktaildb.com');
  const [loading, setLoading] = useState(true);
  const [caughtError, setCaughtError] = useState(null);

  async function loadAlcohol() {
    const alcoholsDataRequests = [];
    const alcoholsRequests = ALCOHOLS.map((alc) => {
      alcoholsDataRequests.push(get(`/api/json/v1/1/search.php?i=${alc}`));
      return get(`/api/json/v1/1/search.php?s=${alc}`);
    });

    try {
      const allCocktails = await Promise.all(alcoholsRequests);
      if (response.ok) {
        const allCocktailsData = await Promise.all(alcoholsDataRequests);

        const cocktailsObject = {};
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < allCocktails.length; i++) {
          cocktailsObject[ALCOHOLS[i]] = {
            drinks: allCocktails[i]?.drinks.slice(0, 10),
            alcoholPercent: allCocktailsData[i]?.ingredients[0].strABV,
          };
        }

        setData(cocktailsObject);
        setLoading(false);
      } else {
        setCaughtError(response.status.toString());
      }
    } catch (err) {
      setCaughtError(err.toString());
    }
  }
  useEffect(() => {
    loadAlcohol();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error || caughtError) {
    return <S.Wrapper>{caughtError || error.toString()}</S.Wrapper>;
  }

  return (
    <S.Wrapper>
      {Object.entries(data).map(
        ([alcoholName, { alcoholPercent, drinks = [] }], i) => (
          <Section
            key={i}
            title={alcoholName}
            subTitle={
              alcoholPercent ? `${alcoholPercent}%` : 'alc % not available'
            }
          >
            <S.CardsContainer>
              {drinks.map((alc) => (
                <Card
                  key={alc.idDrink}
                  id={alc.idDrink}
                  title={alc.strDrink}
                  mainText={alc.strInstructions}
                  imgUrl={alc.strDrinkThumb}
                />
              ))}
            </S.CardsContainer>
          </Section>
        )
      )}
    </S.Wrapper>
  );
};
export default HomePage;

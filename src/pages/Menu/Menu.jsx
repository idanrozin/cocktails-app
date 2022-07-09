import React, { useRef } from 'react';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from 'react-to-print';
import Section from '../../components/Section/Section.jsx';
import { useCocktailsContext } from '../../services/CocktailsContext';
import CocktailsMenu from '../../assets/cocktail-menu.png';
import S from './styles';

const getIngredients = (drinkItem) => {
  const getValuesByKey = (key) =>
    Object.entries(drinkItem).filter(
      (item) => item[0].indexOf(key) === 0 && item[1]
    );

  const ingredients = getValuesByKey('strIngredient');
  const measures = getValuesByKey('strMeasure');

  return ingredients.map((ing, i) => [
    ing[1],
    measures[i] ? measures[i][1] : '',
  ]);
};
const MenuPage = () => {
  const componentRef = useRef();
  const [{ menuItems }, { removeMenuItem }] = useCocktailsContext();
  const hasMenuItems = () => Object.keys(menuItems).length > 0;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <S.MenuPageContainer ref={componentRef}>
      <Fab
        aria-label="print"
        sx={{
          position: 'absolute',
          top: '125px',
          right: '25px',
        }}
        onClick={handlePrint}
      >
        <PrintIcon />
      </Fab>
      <Section
        title={hasMenuItems() ? 'Your Cocktails Menu' : 'No Cocktails Yet..'}
      />
      {hasMenuItems() ? null : (
        <>
          <S.Title>
            Start adding cocktails to see your curated special menu
          </S.Title>
          <S.CocktailLogo src={CocktailsMenu}></S.CocktailLogo>
        </>
      )}
      {Object.values(menuItems).map((item) => (
        <S.MenuItem key={item.idDrink}>
          <Tooltip title={'Remove Item From The Menu'}>
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              sx={{
                position: 'absolute',
                top: '-12px',
                right: '-14px',
              }}
              onClick={() => removeMenuItem(item.idDrink)}
            >
              <PlaylistRemoveIcon />
            </Fab>
          </Tooltip>
          <S.ImagedTitle>
            <img
              src={`${item.strDrinkThumb}/preview`}
              alt={item.strDrink}
              title={item.strDrink}
            />
            <div>
              <h2>{item.strDrink}</h2>
              <h4>Ingredients:</h4>
              <ul>
                {getIngredients(item).map((ing, i) => (
                  <li key={i}>
                    <strong>{ing[0]}</strong>&nbsp;-&nbsp;
                    {ing[1]}
                  </li>
                ))}
              </ul>
            </div>
            <S.Instructions>{item.strInstructions}</S.Instructions>
          </S.ImagedTitle>
        </S.MenuItem>
      ))}
    </S.MenuPageContainer>
  );
};
export default MenuPage;

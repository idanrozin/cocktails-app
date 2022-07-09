import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import S from './styles';

const MyCard = (props) => {
  const { drinkName, imgUrl } = props;
  return (
    // console.log('object :>> ', object);
    // return (
    //   <S.SectionContainer>
    //     <S.Title>{drinkName}</S.Title>
    //     <S.Image alt="cocktail-image" src={imgUrl} />
    //   </S.SectionContainer>
    // );
    <Card sx={{ maxWidth: 190 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {drinkName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default MyCard;

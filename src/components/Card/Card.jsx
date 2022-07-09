import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const MyCard = (props) => {
  const { drinkName, imgUrl, instructions } = props;
  return (
    <Card sx={{ width: 190 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imgUrl}
      />
      <CardContent>
        <Typography
          gutterBottom
          component="div"
          title={drinkName}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: 600,
          }}
        >
          {drinkName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxHeight: '220px', overflowY: 'auto' }}
        >
          {instructions}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Add To Menu">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
export default MyCard;

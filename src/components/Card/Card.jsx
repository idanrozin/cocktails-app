import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCocktailsContext } from '../../services/CocktailsContext';

const MyCard = (props) => {
  const { id, title, imgUrl, mainText } = props;
  const [{ menuItems }, { addMenuItem }] = useCocktailsContext();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Card sx={{ width: 305, position: 'relative' }}>
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
          title={title}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxHeight: '160px', overflowY: 'auto', marginBottom: '35px' }}
        >
          {mainText}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: 'absolute', top: '85px', right: 0 }}>
        <Tooltip title={menuItems[id] ? 'Item Added To Menu' : 'Add To Menu'}>
          <Fab
            size={matches ? 'large' : 'small'}
            color={menuItems[id] ? 'grey' : 'primary'}
            aria-label="add"
            onClick={() => addMenuItem(id)}
            sx={{ cursor: menuItems[id] ? 'default' : 'pointer' }}
          >
            {menuItems[id] ? <CheckIcon /> : <AddIcon />}
          </Fab>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
export default MyCard;

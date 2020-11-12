import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetCocktail } from "../Actions/actionTask";
import _ from "lodash";
import { Spinner } from "react-bootstrap";
// import { Card, Button } from "react-bootstrap";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, makeStyles, Typography } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import clsx from 'clsx';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

function SingleCoctail(props) {

    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    
  const idCocktail = props.match.params.id;
  const dispatch = useDispatch();
  const cocktailState = useSelector((state) => state.Cocktail);
  console.log("cocktailState",cocktailState)

  console.log("idCocktail", idCocktail);

  useEffect(() => {
      dispatch(GetCocktail(idCocktail))   
  }, [])

  const showData = () => {
    const cocktail = cocktailState.data[0];
    console.log("cocktail",cocktail)
      if (!_.isEmpty(cocktail)){
        
          console.log("cocktail",cocktail)
          return (
          <div>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  D
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon/>
                </IconButton>
              }
              title={cocktail.strDrink}
              subheader={cocktail.strAlcoholic}  
            />
            <CardMedia
              className={classes.media}
              image={cocktail.strDrinkThumb}
              title={cocktail.strAlcoholic}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               {cocktail.strInstructions}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {/* <Typography paragraph>Method:</Typography> */}
                <Typography paragraph>
                {cocktail.strInstructionsDE}
                </Typography>
                <Typography>
                  {/* Set aside off of the heat to let rest for 10 minutes, and then serve. */}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
         </div>
          )        
      }
      if (cocktailState.loading) {
          console.log("loading")
        return (
          <div className="SpinnerLoading">
            <Spinner animation="border" />
            <p> loading</p>
          </div>
        );
      }
  
      if (cocktailState.errorMsg !== "") {
          console.log("errorMsg")
        return <p> {cocktailState.errorMsg} </p>;
      }
      return <p> unable to get data</p>;
  };
        return (
            <div>
            {showData()}
            </div>
        );
}

export default SingleCoctail;

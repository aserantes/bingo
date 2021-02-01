import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grow from "@material-ui/core/Grow";

import { newBoard, selectIsBingo } from "../board/boardSlice";
import { Avatar } from "@material-ui/core";
import poncho from "../../img/beetle.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    "@keyframes rotate": {
      "0%": {
        transform: "rotate(0)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
    poncho: {
      animation: "$rotate 1s infinite ease-in-out",
      backgroundColor: "rgb(0,0,0,0.5)",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: "bold",
    },
  })
);

export function Menu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isBingo = useSelector(selectIsBingo);

  const handleClick = () => {
    dispatch(newBoard());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Poncho!
        </Typography>
        <Grow in={isBingo}>
          <div>
            <Avatar
              alt="image of a rotating VolksWagen Beetle"
              src={poncho}
              className={classes.poncho}
            />
          </div>
        </Grow>
        <Button color="inherit" onClick={handleClick}>
          New Game
        </Button>
      </Toolbar>
    </AppBar>
  );
}

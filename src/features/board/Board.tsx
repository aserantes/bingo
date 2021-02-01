import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useSelector, useDispatch } from "react-redux";
import { toggleCard, selectBoard, selectBingoIndexes } from "./boardSlice";
import { segmentBoard } from "../../utils/utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    "@keyframes myEffect": {
      "0%": {
        backgroundColor: theme.palette.secondary.main,
      },
      "25%": {
        backgroundColor: theme.palette.secondary.light,
      },
      "50%": {
        backgroundColor: theme.palette.secondary.main,
      },
      "75%": {
        backgroundColor: theme.palette.secondary.dark,
      },
      "100%": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
    paper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      margin: theme.spacing(0.5),
      cursor: "pointer",
      minHeight: theme.spacing(10),
    },
    toggled: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.contrastText,
    },
    winner: {
      color: theme.palette.secondary.contrastText,
      fontWeight: theme.typography.fontWeightBold,
      animation: `$myEffect 2s linear`,
      animationIterationCount: "infinite",
    },
    typography: {
      [theme.breakpoints.up("xs")]: {
        fontSize: "0.6rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
    },
  })
);

export function Board() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const bingoIndexes = useSelector(selectBingoIndexes);

  const handleCardClick = (index: number): void => {
    index !== 12 && dispatch(toggleCard(index));
  };

  const segmentedBoard = segmentBoard(board, 5);

  const renderBoard = segmentedBoard.map((segment, segmentIndex) => (
    <Grid container key={JSON.stringify(segment)} wrap="nowrap">
      {segment.map((card, cardIndex) => (
        <Grid item xs key={card.id}>
          <Paper
            onClick={() => handleCardClick(segmentIndex * 5 + cardIndex)}
            className={`${classes.paper} ${card.toggled && classes.toggled} ${
              bingoIndexes.includes(segmentIndex * 5 + cardIndex) &&
              classes.winner
            }`}
          >
            <Typography className={classes.typography}>{card.label}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  ));
  return (
    <div className={classes.root}>
      <Grid container>{renderBoard}</Grid>
    </div>
  );
}

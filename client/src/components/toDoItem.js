import React from 'react';
import { Typography, Paper, Grid, IconButton, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const ToDoItem = (props) => {
  const { todo, onClick, onRemoveClick } = props;

  return (
    <Paper variant="outlined">
      <Grid container direction="row" alignItems="center" justify="space-evenly">
        <Grid item xs={8}>
          <Typography
            style={{ textDecoration: todo.completed ? 'line-through' : null }}
            variant="h6"
          >
            {todo.name}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Tooltip title={todo.completed ? 'mark as not done' : 'mark as done'}>
            <IconButton data-testid="toggle-done" onClick={() => onClick(todo.id)}>
              {!todo.completed ? <CheckCircleOutlineRoundedIcon /> : <CancelRoundedIcon />}
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={1}>
          <Tooltip title="Remove from list">
            <IconButton data-testid="delete" onClick={() => onRemoveClick(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToDoItem;

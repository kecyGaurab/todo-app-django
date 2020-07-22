import React from 'react';
import { TextField, Button, Grid, InputAdornment } from '@material-ui/core';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

const AddToDo = (props) => {
  const { onInputChange, onSubmit, newTodo, emptyFields } = props;
  return (
    <form onSubmit={onSubmit}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item xs={10}>
          <TextField
            placeholder="Add new todo"
            variant="outlined"
            value={newTodo.name}
            onChange={onInputChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment onClick={emptyFields} position="start">
                  <ClearRoundedIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2} align="right">
          <Button
            disabled={!newTodo.name}
            color="primary"
            size="large"
            type="submit"
            value="Submit"
            variant="outlined"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddToDo;

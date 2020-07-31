import React from 'react';
import { AppBar, Grid, Typography, Toolbar } from '@material-ui/core';

const NavBar = () => (
  <AppBar color="primary" position="static">
    <Toolbar>
      <Grid container justify="space-between">
        <Grid item xs={8} align="center">
          <Typography variant="h3" color="primary">
            The Todo App
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);
export default NavBar;

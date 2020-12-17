import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WithHook from "./WithHook";
import AxiosProvider from "./provider";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function App() {
  const classes = useStyles();
  // Default value is New York
  const [location, setLocation] = React.useState("New York");
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item md={6} xs={12}>
        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          className={classes.root}
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <AxiosProvider>
          <WithHook location={location} />
        </AxiosProvider>
      </Grid>
    </Grid>
  );
}

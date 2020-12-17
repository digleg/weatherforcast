import PropTypes from "prop-types";
import React from "react";
import {
  Card,
  // CardHeader,
  CardContent,
  CardActions,
  Button,
  Grid,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  CircularProgress,
} from "@material-ui/core";
import Barchart from "./chart/Barchart";
import Piechart from "./chart/Piechart";

function WeatherCard({ data, reload, title }) {
  if (!data) {
    return (
      <Grid container justify="center">
        <CircularProgress color="primary" />
      </Grid>
    );
  }
  return (
    <Card>
      <CardActions>
        <Button onClick={reload} color="primary" variant="contained">
          Search & Reload
        </Button>
      </CardActions>
      <CardContent>
        {!data.consolidated_weather.length ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 500,
            }}
          >
            Please Enter A Correct City Name!
          </div>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Weather</TableCell>
                <TableCell>Max temperature</TableCell>
                <TableCell>Min temperature</TableCell>
                <TableCell>Humidity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.consolidated_weather.map(
                (w, index) =>
                  index < 5 && (
                    <TableRow key={w.id}>
                      <TableCell>{w.applicable_date}</TableCell>
                      <TableCell>
                        <img
                          src={`https://www.metaweather.com/static/img/weather/${w.weather_state_abbr}.svg`}
                          alt=""
                          width="22"
                        />
                        &nbsp;&nbsp;
                        {w.weather_state_name}
                      </TableCell>
                      <TableCell>
                        <Barchart value={w.max_temp} />
                      </TableCell>
                      <TableCell>
                        <Barchart value={w.min_temp} />
                      </TableCell>
                      <TableCell>
                        <Piechart value={w.humidity} />
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}

WeatherCard.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string.isRequired,
  reload: PropTypes.func.isRequired,
};

WeatherCard.defaultProps = {
  data: null,
};

export default WeatherCard;

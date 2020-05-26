import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import Typography from "@material-ui/core/Typography";

import ListingDetails from "./ListingDetails";
import ListingBookings from "./ListingBookings";
import fetchMediaForTour from "../../helpers/fetchMediaForTour";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "20px 0",
  },
  tourDetails: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0px 12px",
    placeItems: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0px 0px",
  },
  noBottomPad: {
    paddingBottom: "16px !important",
  },
  italicBold: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
  inline: {
    display: "flex",
  },
  verticalCenter: {
    alignSelf: "center"
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  const [status, setStatus] = useState(props.status);
  const [tourImages, setTourImages] = useState([]);

  const tourDateTime = new Date(props.date_time);

  useEffect(() => {
    fetchMediaForTour(props.id)
      .then(media => {
        const imagePaths = [];
        for (const obj of media) {
          imagePaths.push(obj.src)
        }
        setTourImages(imagePaths);
      })
      .catch(error => console.log(error));
  }, [props.tour_id]);

  return (
    <Card className={classes.root}>
      <div>
        <CardMedia
          component="img"
          alt={props.title}
          height="80"
          image={tourImages[0]}
          title={props.title}
        />
        <CardContent className={classes.noBottomPad}>
          <div className={classes.tourDetails}>
            <Typography
              variant="h6"
              component="h2"
              className={classes.italicBold}
            >
              {props.title}
            </Typography>
            <Typography variant="body1" component="span">
              {props.city}
            </Typography>
          </div>
          <div className={classes.inline}>
            <EventAvailableIcon />
            &nbsp;
            <Typography variant="body2" component="span" className={classes.verticalCenter}>
              {tourDateTime.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </Typography>
          </div>
          <CardActions className={classes.buttons}>
            <ListingBookings {...props} />
            <ListingDetails setStatus={p => setStatus(p)} {...props} />
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
}

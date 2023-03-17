import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c8.alamy.com/comp/RDDK0C/adult-film-actress-angela-white-attends-the-xbiz-awards-at-hotel-westin-bonaventure-in-los-angeles-usa-on-17-january-2019-usage-worldwide-RDDK0C.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Top-Shop
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Top-Shop va prezinta o gama larga de sutiene. Sunt disponibile toate
            marimile la alegere.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

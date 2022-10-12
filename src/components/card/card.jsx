import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardComponent = ({ image, alt, heightImage, title, description }) => {
  return (
    <Card sx={{ maxWidth: 400 }} style={{ color: "white", borderRadius: "0px"}} >
      <CardMedia component="img" alt={alt} height={heightImage} image={image} />
      <CardContent style={{ backgroundColor: "#121110"}}>
        <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: "bolder" }} >
          {title}
        </Typography>
        <Typography style={{ color: "white"}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;

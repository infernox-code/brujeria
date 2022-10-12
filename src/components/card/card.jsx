import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardComponent = ({ image, alt, heightImage, title, description }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" alt={alt} height={heightImage} image={image} />
      <CardContent style={{backgroundColor: "gray"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;

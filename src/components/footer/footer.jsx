import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./footer.css";

const FooterComponent = () => {
  return (
    <div id="footer">
      <Grid container spacing={2} columns={15}>
        <Grid item xs={5} className="center">
          <span>Copyright©2022</span>
        </Grid>
        <Grid item xs={5} className="center">
          <a href="#">
            <span>Contacto del desarrollador</span>
          </a>
        </Grid>
        <Grid item xs={5} className="center">
          <span>Terminos y condiciones</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterComponent;

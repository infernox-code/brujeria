import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import "./footer.css";

const FooterComponent = ({ scrollSection }) => {
  return (
    <div id="footer" style={{ margin: "0 60px"}}>
      <Grid container spacing={2} columns={15}>
        <Grid item xs={5} className="center">
          <span>Copyright©2022</span>
        </Grid>
        <Grid item xs={5} className="center">
          <Link href="#" underline="none" style={{ color: "white" }}>
            <span>Contacto del desarrollador</span>
          </Link>
        </Grid>
        <Grid item xs={5} className="center">
          <Button onClick={() => scrollSection(4)}  sx={{ color: "white", display: "block" }}>
            <span>Terminos y condiciones</span>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterComponent;

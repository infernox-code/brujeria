import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "@mui/material/Button";
import ResponsiveAppBarComponent from "./components/appbar/appbar";
import SectionComponent from "./components/section/section";
import FooterComponent from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <div id="main">
      <ResponsiveAppBarComponent />
      <SectionComponent backgroundColor="purple" height={88}>
      </SectionComponent>
      <SectionComponent backgroundColor="green" height={100}>
      </SectionComponent>
      <FooterComponent />
    </div>
  );
}

export default App;

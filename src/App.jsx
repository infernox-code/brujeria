import React, { useRef, useState, useEffect } from "react";
import ResponsiveAppBarComponent from "./components/appbar/appbar";
import SectionComponent from "./components/section/section";
import FooterComponent from "./components/footer/footer";
import FloatingWhatsApp from "react-floating-whatsapp";
import AvatarWhatsapp from "./assets/avatar-wpp.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import CustomButtonComponent from "./components/customButton/customButton";
import ThreeComponent from "./components/three/three";
import CardComponent from "./components/card/card";
import { cards, quotes } from "./constants";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import QuoteComponent from "./components/quote/quote";
import "./App.css";

function App() {
  const topRef = useRef(null);
  const servicesRef = useRef(null);
  const quotesRef = useRef(null);
  const contactRef = useRef(null);
  const conditionsRef = useRef(null);

  const [toBottom, setToBottom] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position == 0) {
      setToBottom(true);
    } else {
      setToBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=+573177837117&text=Hola Maestro",
      "_blank"
    );
  };

  const executeScroll = () => {
    if (toBottom) {
      conditionsRef.current.scrollIntoView();
      setToBottom(false);
    } else {
      topRef.current.scrollIntoView();
      setToBottom(true);
    }
  };

  const scrollSection = (index) => {
    switch (index) {
      case 0:
        topRef.current.scrollIntoView();
        break;
      case 1:
        servicesRef.current.scrollIntoView();
        break;
      case 2:
        quotesRef.current.scrollIntoView();
        break;
      case 3:
        contactRef.current.scrollIntoView();
        break;
      case 4:
        conditionsRef.current.scrollIntoView();
        break;
    }
  };

  return (
    <div id="main">
      <ResponsiveAppBarComponent scrollSection={scrollSection} />
      {/* Inicio */}
      <SectionComponent reference={topRef} height={100}>
        <div style={{ paddingTop: "68.5px" }} className="inital-section">
          <div className="mr-100">
            <h1>
              Contacta con los Maestros <br></br> ahora mismo
            </h1>
            <h2 style={{ fontSize: "3rem" }}>Amarres y brujería real</h2>
            <h3>Nosotros te escuchamos, agenda una asesoría </h3>
            <CustomButtonComponent
              onClick={handleClick}
              variant="outlined"
              style={{ padding: "6px 30px", marginTop: "40px", zIndex: "1" }}
            >
              Agenda una asesoría
            </CustomButtonComponent>
          </div>
          <div>
            <ThreeComponent />
          </div>
        </div>
      </SectionComponent>

      {/* Servicios */}
      <SectionComponent reference={servicesRef} height={100}>
        <h2 style={{ padding: "65px 0", width: "100%", textAlign: "center" }}>
          Conozca nuestros servicios!
        </h2>
        <div style={{ margin: "0 40px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {cards.map((element, index) => {
                return (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <CardComponent
                      image={element.image}
                      title={element.title}
                      description={element.description}
                      alt={element.alt}
                      heightImage={element.heightImage}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <div className="center">
            <CustomButtonComponent
              onClick={handleClick}
              variant="outlined"
              style={{ padding: "6px 30px", zIndex: "1", marginTop: "10vh" }}
            >
              Pregunte por el servicio que necesita!
            </CustomButtonComponent>
          </div>
        </div>
      </SectionComponent>

      {/* Testimonios */}
      <SectionComponent reference={quotesRef} style={{ height: "max-content" }}>
        <h2
          style={{
            padding: "65px 0 30px 0",
            width: "100%",
            textAlign: "center",
          }}
        >
          Testimonios
        </h2>
        <Box sx={{ flexGrow: 1 }} id="quotes">
          {quotes.map((el, index) => {
            return (
              <QuoteComponent
                index={index}
                key={index}
                quote={el.quote}
                author={el.author}
                avatarImage={el.avatarImage}
                profession={el.profession}
              />
            );
          })}
        </Box>
      </SectionComponent>

      {/* Conctact */}
      <SectionComponent
        reference={contactRef}
        backgroundColor="gray"
        height={100}
      ></SectionComponent>

      {/* Conditions */}
      <SectionComponent
        reference={conditionsRef}
        backgroundColor="red"
        height={100}
      ></SectionComponent>

      <IconButton
        onClick={executeScroll}
        id="navigation-button"
        aria-label="page navigation"
        color="secondary"
        size="large"
      >
        {toBottom ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </IconButton>
      <FloatingWhatsApp
        phoneNumber="+573177837117"
        accountName="Maestro"
        allowEscaping="true"
        chatMessage="Amarres y brujería real!"
        statusMessage="Te responderé lo mas pronto posible..."
        avatar={AvatarWhatsapp}
      />
      <FooterComponent />
    </div>
  );
}

export default App;

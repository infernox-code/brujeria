import React, { useRef, useState, useEffect, lazy, Suspense  } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import QuoteComponent from "./components/quote/quote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Loading from "./components/loading/loading";
const ResponsiveAppBarComponent = lazy(() => import("./components/appbar/appbar"));
const SectionComponent = lazy(() => import("./components/section/section"));
const FooterComponent = lazy(() => import("./components/footer/footer"));
const FloatingWhatsApp = lazy(() => import("react-floating-whatsapp"));
const AvatarWhatsapp = lazy(() => import("./assets/avatar-wpp.jpg"));
const CustomButtonComponent = lazy(() => import("./components/customButton/customButton"));
const ThreeComponent = lazy(() => import("./components/three/three"));
const CardComponent = lazy(() => import("./components/card/card"));

import { cards, quotes } from "./constants";

import "./App.css";

const wppUrl =
  "https://api.whatsapp.com/send/?phone=+573177837117&text=Hola Maestro";
const mapUrl =
  "https://www.google.com/maps/@6.251144,-75.5729266,3a,90y,248.34h,83.93t/data=!3m6!1e1!3m4!1s4HQi6cdDhvwk3pwxFtAZmQ!2e0!7i16384!8i8192";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [toBottom, setToBottom] = useState(true);

  const topRef = useRef(null);
  const servicesRef = useRef(null);
  const quotesRef = useRef(null);
  const contactRef = useRef(null);
  const conditionsRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position == 0) {
      setToBottom(true);
    } else {
      setToBottom(false);
    }
  };

  return (
    <div id="main">
      <Suspense fallback={<Loading />}>
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
              onClick={() => handleClick(wppUrl)}
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
              onClick={() => handleClick(wppUrl)}
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
      <SectionComponent reference={contactRef} height={100}>
        <div className="inital-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1665707148259!6m8!1m7!1s4HQi6cdDhvwk3pwxFtAZmQ!2m2!1d6.251144018441813!2d-75.57292663306193!3f252.81936118531772!4f-4.576468756499068!5f0.7820865974627469"
            width="600"
            height="450"
            style={{ border: 0, marginLeft: "40px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div>
            <div style={{ margin: "0 40px" }}>
              <h2 style={{ fontSize: "3rem" }}>Contacta con los Maestros</h2>
              <h3>Revisa nuestra ubicación</h3>
              <CustomButtonComponent
                onClick={() => handleClick(mapUrl)}
                variant="outlined"
                style={{ padding: "6px 30px", marginTop: "40px", zIndex: "1" }}
                startIcon={<LocationOnIcon />}
              >
                Abrir mapa
              </CustomButtonComponent>
            </div>
          </div>
        </div>
      </SectionComponent>

      {/* Conditions */}
      <SectionComponent reference={conditionsRef} height={100}>
        <h2 style={{ padding: "65px 0", width: "100%", textAlign: "center" }}>
          Terminos y condiciones
        </h2>
        <div style={{ margin: "0 auto", maxWidth: "75vw" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Condiciones del servicio
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Establecen la forma en que se puede utilizar el servicio o
                contenido.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Políticas de cookies
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Capacidad de recordar su visita cuando vuelva a navegar por esta
                página.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                ¿Qué información recopilamos?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                La información sobre ti depende de la forma en la que usas
                nuestros Productos
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                ¿Cómo usamos tu información?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Usamos la información que recopilamos para ofrecerte una
                experiencia personalizada, incluidos anuncios, además de los
                otros fines que se detallan más adelante.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                ¿Qué es la Política de privacidad y qué cubre?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                En la Política de privacidad, explicamos cómo recopilamos,
                usamos, compartimos, retenemos y transferimos información.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </SectionComponent>

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
      <FooterComponent scrollSection={scrollSection} />
      </Suspense>
    </div>
  );
}

export default App;

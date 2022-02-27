import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from ".dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";

import responsiveTester from "./dom/prueba_responsive.js";

import networkStatus from "./dom/deteccion_red.js";
import getGeolocalizacion from "./dom/geolocalizacion.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alama", "#desactivar-alarma");

  countdown("countdown", "Enero 23, 2022", "Feliz cumpleaños amigo");
  scrollTopButton(".scroll-top-btn");

  darkTheme(".dark-theme-btn", "dark-mode");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, "ball", "stage");
});

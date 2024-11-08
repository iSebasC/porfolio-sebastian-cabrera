"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Parámetros de configuración
    const id = "72914833";
    const system = "SIDJ";
    const name = "Sebas C";
    const email = "sebasssc@test.com";
    const rol = "Declarante";
    const view = "https://apps1.contraloria.gob.pe/ddjj/";

    // Construir la URL con parámetros de consulta
    const chatbotUrl = `https://dev-inter-app-c8d6a8a2fqf0e7f9.eastus2-01.azurewebsites.net/?id=${encodeURIComponent(
      id
    )}&system=${encodeURIComponent(system)}&name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&rol=${encodeURIComponent(
      rol
    )}&view=${encodeURIComponent(view)}`;

    // Crear y agregar el iframe con la URL generada
    const iframe = document.createElement("iframe");
    iframe.src = chatbotUrl;
    iframe.style.border = "none";

    // Agregar iframe al contenedor
    document.getElementById("chatbot-container")?.appendChild(iframe);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      {/* <Services /> */}
      <Work />
      {/* <Reviews /> */}
      <Cta />
      <div id="chatbot-container" style={{ width: "100%", height: "600px" }}></div>
    </main>
  );
}

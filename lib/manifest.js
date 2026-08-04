(function () {
  "use strict";

  window.__BRAND__ = {
    name: "IA Wash",
    tagline: "Pagás. Lavás. Te vas.",

    contact: {
      whatsapp: null, // TODO: completar número real, ej. "+5491100000000"
      whatsappDisplay: "WhatsApp (a confirmar)",
      email: null, // TODO: completar email comercial real
      emailDisplay: "email a confirmar"
    },

    comparison: [
      {
        old: "Sacás turno y esperás tu horario",
        neu: "Llegás, lavás y te vas — sin reserva"
      },
      {
        old: "Entre 30 y 60 minutos de espera",
        neu: "6 a 9 minutos, según el modo elegido"
      },
      {
        old: "Alguien más maneja y toca tu auto",
        neu: "Cero contacto — sin cepillos ni trapos"
      },
      {
        old: "Riesgo de rayones por cepillos y trapos",
        neu: "Sistema sin fricción, cuida la pintura"
      },
      {
        old: "Hay que bajar objetos de valor",
        neu: "Te quedás en el auto, la máquina hace el resto"
      },
      {
        old: "Desperdicio de agua e insumos",
        neu: "Circuitos separados de agua y espuma: ahorra más de 1/3 de químico"
      }
    ],

    cycleSteps: [
      {
        n: "01",
        title: "Detección inteligente",
        desc: "Sensores ultrasónicos alemanes miden tu auto y ajustan el recorrido del brazo automáticamente."
      },
      {
        n: "02",
        title: "Prelavado",
        desc: "Líquido de alta adherencia ablanda la suciedad antes de tocar la carrocería, sin fricción."
      },
      {
        n: "03",
        title: "Espuma y color",
        desc: "Espuma de alta densidad en cortina, con luces LED de colores durante todo el ciclo."
      },
      {
        n: "04",
        title: "Lavado a presión 360°",
        desc: "Circuitos separados de agua y espuma, con sistema anticolisión que ajusta la distancia al auto."
      },
      {
        n: "05",
        title: "Cera líquida",
        desc: "Capa protectora que sella el brillo de la pintura y facilita el secado."
      },
      {
        n: "06",
        title: "Secado por aire",
        desc: "Cuatro turbinas de alta potencia secan el auto antes de que salgas del box."
      }
    ],

    specs: [
      { label: "Instalación mínima", value: "7,0 × 4,0 × 3,1 m" },
      { label: "Auto máximo", value: "5,6 × 2,6 × 2,0 m" },
      { label: "Agua por ciclo", value: "90–140 L" },
      { label: "Energía por lavado", value: "0,5–1,2 kWh" },
      { label: "Potencia total", value: "30 kW" },
      { label: "Bomba de presión", value: "18,5 kW · sello alemán TBT Wash" },
      { label: "Secado", value: "4 turbinas de 5,5 kW" },
      { label: "Sensores", value: "Ultrasónicos Pepperl+Fuchs (Alemania)" },
      { label: "Alimentación", value: "Trifásica 380V / monofásica 220V · 50Hz" },
      { label: "Garantía", value: "3 años" }
    ],

    washStages: [
      {
        n: "01",
        name: "Prelavado",
        video: "assets/video/stages/stage-1-prelavado.mp4",
        poster: "assets/img/stage-1-prelavado-poster.webp"
      },
      {
        n: "02",
        name: "Espuma",
        video: "assets/video/stages/stage-2-espuma.mp4",
        poster: "assets/img/stage-2-espuma-poster.webp"
      },
      {
        n: "03",
        name: "Alta presión",
        video: "assets/video/stages/stage-3-presion.mp4",
        poster: "assets/img/stage-3-presion-poster.webp"
      },
      {
        n: "04",
        name: "Cera",
        video: "assets/video/stages/stage-4-cera.mp4",
        poster: "assets/img/stage-4-cera-poster.webp"
      },
      {
        n: "05",
        name: "Secado",
        video: "assets/video/stages/stage-5-secado.mp4",
        poster: "assets/img/stage-5-secado-poster.webp"
      }
    ],

    benefits: [
      {
        title: "Sin personal operativo",
        desc: "El ciclo completo —detección, lavado, secado— es 100% automático. Los sistemas sin contacto reducen hasta un 70% el costo de personal frente a un lavadero tradicional."
      },
      {
        title: "Abierto las 24 horas",
        desc: "No depende de que haya alguien trabajando para seguir generando ingresos: podés operar de forma no presencial, incluso de noche."
      },
      {
        title: "Más autos, mismo tiempo",
        desc: "Cada lavado dura entre 3 y 6 minutos: eso representa una capacidad de hasta 10 autos por hora en un solo box, contra 1 o 2 en un lavadero tradicional en ese mismo lapso. La cantidad real de autos lavados depende del tráfico de cada ubicación."
      }
    ],

    marketOpening: {
      value: "US$30.350",
      unit: "millones",
      text: "Tamaño del mercado mundial de lavado de autos en 2026, creciendo un 7,5% anual.",
      source: "Mordor Intelligence"
    },

    marketCountriesStatText: "en los 5 continentes, donde el IA600 PRO ya está en funcionamiento",

    marketCountriesText: "Estas máquinas ya funcionan desde China —donde se fabrica— hasta España, Emiratos Árabes, Corea del Sur, Brasil y Australia, entre otros 40 países más.",

    marketCentral: { name: "Argentina" },

    marketNetwork: [
      {
        name: "Europa",
        count: 12,
        countries: ["Irlanda", "Polonia", "Grecia", "Bielorrusia", "Rusia", "Reino Unido", "Hungría", "España", "Serbia", "Albania", "Rumania", "Macedonia del Norte"]
      },
      {
        name: "Asia",
        count: 19,
        countries: ["Uzbekistán", "Kazajistán", "Georgia", "Turquía", "Arabia Saudita", "Emiratos Árabes", "Kirguistán", "Camboya", "China", "Irak", "Baréin", "Brunéi", "Indonesia", "Mongolia", "Corea del Sur", "Vietnam", "Singapur", "Tailandia", "Malasia"]
      },
      {
        name: "África",
        count: 3,
        countries: ["Nigeria", "Egipto", "Tanzania"]
      },
      {
        name: "América",
        count: 9,
        countries: ["Canadá", "Estados Unidos", "México", "Costa Rica", "Colombia", "Santa Lucía", "Ecuador", "Chile", "Brasil"]
      },
      {
        name: "Oceanía",
        count: 2,
        countries: ["Australia", "Nueva Zelanda"]
      }
    ],

    marketDiff: "Este sistema 100% sin contacto llega para revolucionar el mercado argentino, siendo una propuesta sin antecedentes en el país.",

    marketClosing: "Ahora, por primera vez, esta tecnología llega a Argentina."
  };
})();

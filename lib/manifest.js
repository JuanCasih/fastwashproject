(function () {
  "use strict";

  window.__BRAND__ = {
    name: "IA Wash",
    tagline: "Pagás. Lavás. Te vas.",

    contact: {
      whatsapp: "+54 9 351 763-1708",
      whatsappDisplay: "WhatsApp (a confirmar)",
      email: "jccasih@gmail.com",
      emailDisplay: "email a confirmar"
    },

    hero: {
      titleLines: ["Convertí 43 m²", "en tu próxima", "unidad de negocio"],
      sub: "Un lavadero automático que lava entre 8 y 16 autos por hora, pensado para estaciones de servicio, concesionarias, lavaderos y cualquier espacio con buen tránsito vehicular. Donde hay tránsito hay demanda: lo único que falta es capacidad para atenderla.",
      stats: [
        { prefix: "", value: "8 a 16", unit: "autos por hora" },
        { prefix: "Hasta", value: "128", unit: "autos por día" },
        { prefix: "En solo", value: "43", unit: "m² de espacio" }
      ],
      ctaSecondary: "Ver cómo funciona"
    },

    marquee: [
      { phrase: "DONDE HAY TRÁNSITO, HAY DEMANDA", stat: "8 A 16 AUTOS POR HORA" },
      { phrase: "TU ESPACIO PUEDE FACTURAR MÁS", stat: "EN SOLO 43 M²" },
      { phrase: "TU EQUIPO ATIENDE, LA MÁQUINA LAVA", stat: "HASTA 128 AUTOS POR DÍA" }
    ],

    oportunidad: {
      perfilesTitle: "Para qué tipo de negocio sirve",
      perfiles: [
        {
          title: "Estaciones de servicio",
          image: "estacion-de-servicio",
          alt: "Camioneta lavándose en el puente automático de una estación de servicio, con los surtidores de nafta de fondo",
          hook: "El auto ya está parado en tu playa.",
          desc: "Cargar nafta lleva unos minutos. El lavado, unos pocos más. Sumás facturación sobre un cliente que ya está en tu playa, sin salir a buscar a nadie."
        },
        {
          title: "Concesionarias",
          image: "concesionaria",
          alt: "Auto cubierto de espuma lavándose en el playón de una concesionaria, con autos 0km estacionados de fondo",
          hook: "Lavás tus unidades igual. La pregunta es dónde.",
          desc: "Dejás de tercerizar la preparación: el lavado pasa a ser un servicio interno y bajás tus costos. Los 0km y los usados se preparan en tu propio patio, sin moverlos a otro lado."
        },
        {
          title: "Lavaderos",
          image: "lavadero",
          alt: "SUV lavándose en un lavadero automático, con productos e insumos de lavado de fondo",
          hook: "¿Cuántos autos rechazás por semana?",
          desc: "Multiplicás la capacidad sin sumar personal ni ampliar el local, y mejorás el servicio que ya das."
        },
        {
          title: "Estacionamientos y cocheras",
          image: "parking",
          alt: "Auto lavándose en medio de una playa de estacionamiento al aire libre, rodeado de autos estacionados",
          hook: "El espacio lo tenés. El auto está ahí.",
          desc: "Solo falta convertir una plaza en una unidad que factura por hora."
        }
      ]
    },

    equipo: {
      title: "El equipo",
      diagramAlt: "Diagrama técnico de instalación del equipo, con medidas de la cabina, el riel de recorrido, el tanque de agua, el compresor de aire y la consola de control",
      datos: [
        { value: "43 m²", desc: "Espacio total necesario, incluida la sala de máquinas" },
        { value: "3,5 m", desc: "Altura libre requerida" },
        { value: "380V", desc: "Conexión trifásica" },
        { value: "5,4 × 2,2 × 2,0 m", desc: "Vehículo máximo admitido" },
        { value: "Autos, SUV, pickups y vans", desc: "Tipos de vehículo" }
      ],
      colorPicker: {
        introTitle: "Personalizá tu equipo",
        introDesc: "Elegí el color de la carcasa entre seis opciones, o incorporá el logo de tu marca en el equipo y en la terminal de control. Así el lavadero refleja tu identidad desde el día uno.",
        closing: "El equipo se entrega en el color que elijas, sin costo adicional.",
        options: [
          { name: "Blanco", hex: "#F1F0EA", file: "machine-mlm535", isDefault: true },
          { name: "Azul", hex: "#2271B3", file: "maquina-azul" },
          { name: "Amarillo", hex: "#FAD201", file: "maquina-amarillo" },
          { name: "Verde", hex: "#327662", file: "maquina-verde" },
          { name: "Rojo", hex: "#CC0605", file: "maquina-rojo" },
          { name: "Negro", hex: "#0A0A0A", file: "maquina-negro" }
        ]
      },
      etapasSubtitle: "Qué pasa mientras el auto está adentro",
      etapas: [
        { n: "01", title: "Espuma con cepillado", desc: "Se aplica la espuma mientras los cepillos trabajan sobre la carrocería." },
        { n: "02", title: "Enjuague", desc: "Se retira la espuma y los restos de suciedad con agua limpia." },
        { n: "03", title: "Cera líquida", desc: "Se aplica la capa de protección y brillo." },
        { n: "04", title: "Secado", desc: "El secador superior baja siguiendo el contorno del auto." }
      ],
      etapasClosing: "El ciclo se configura según el servicio que quiera ofrecer cada negocio."
    },

    soporte: {
      title: "Todo lo que necesita para funcionar está acá",
      items: [
        { title: "Los químicos se compran en Argentina", desc: "La máquina usa espuma y cera líquida de pH neutro, disponibles en cualquier proveedor local." },
        { title: "Los cepillos duran años", desc: "Entre 80.000 y 120.000 lavados antes del recambio. A 50 autos por día, son más de cinco años de uso." },
        { title: "38 repuestos incluidos", desc: "Un juego completo de repuestos originales viene con el equipo, sin costo adicional." },
        { title: "El mantenimiento lo hacés acá", desc: "Inspección diaria, engrase de rodamientos y cadenas y limpieza de sensores. No hace falta traer a nadie del exterior." },
        { title: "Más de 10 años de vida útil", desc: "El equipo está diseñado para más de una década de operación continua." }
      ]
    },

    precios: {
      title: "Inversión",
      value: "USD 46.000",
      desc: "Equipo completo, instalación con supervisión técnica y 38 repuestos originales incluidos.",
      autoservicioNote: "El equipo de autoservicio se comercializa por separado.",
      plazoValue: "60 días",
      plazoDesc: "desde la confirmación del pedido hasta la entrega.",
      timelineTitle: "Plan de pagos",
      timeline: [
        { monto: "USD 23.000", momento: "Al confirmar el pedido" },
        { monto: "USD 11.500", momento: "Contra entrega e instalación" },
        { monto: "USD 11.500", momento: "A los 30 días de la puesta en marcha" }
      ],
      closing: "Consultanos por condiciones de pago anticipado.",
      ctaLabel: "Hablar por WhatsApp"
    },

    autoservicio: {
      title: "Más servicios en el mismo espacio",
      imageAlt: "Equipo de autoservicio con aspiradora, inflador de neumáticos y aromatizante",
      heading: "Equipo de autoservicio tres en uno",
      lead: "Aspiradora, inflador de neumáticos y aromatizante en un solo equipo.",
      parrafos: [
        "Funciona las 24 horas sin operador, y capta también al cliente que solo pasa a aspirar o inflar sin lavar.",
        "Mientras la máquina lava un auto, otro cliente usa el autoservicio: dos servicios funcionando al mismo tiempo en el mismo espacio."
      ],
      features: [
        "Se alimenta con 220V monofásico, sin instalación especial",
        "Colector de polvo de 30 litros",
        "Manguera de aire de 10 metros",
        "El inflador se detiene solo al alcanzar la presión programada",
        "Disponible con una, dos o tres fragancias"
      ],
      priceNote: "Se comercializa por separado. Consultanos por el precio."
    }

  };
})();

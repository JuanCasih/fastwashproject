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
      kicker: "La oportunidad",
      title: "El lavado deja de depender de cuántas manos tengas",
      parrafos: [
        "Donde hay tránsito de autos, hay demanda de lavado. La diferencia está en cuántos podés atender.",
        "Un lavadero tradicional depende de cuántos autos alcance a lavar el personal. Con la M-LM535 el lavado deja de ser el cuello de botella: la máquina hace entre 8 y 16 autos por hora de forma sostenida, y el equipo se dedica a gestionar, cobrar y atender."
      ],
      perfilesTitle: "Para qué tipo de negocio sirve",
      perfiles: [
        {
          title: "Estaciones de servicio",
          image: "estacion-de-servicio",
          alt: "Camioneta lavándose en el puente automático de una estación de servicio, con los surtidores de nafta de fondo",
          hook: "Tu cliente ya frenó. Ya está con el auto detenido.",
          desc: "Cargar nafta lleva tres minutos. Lavar el auto, tres más. Sumás facturación sobre un cliente que ya está en tu playa, sin salir a buscar a nadie."
        },
        {
          title: "Concesionarias",
          image: "concesionaria",
          alt: "Auto cubierto de espuma lavándose en el playón de una concesionaria, con autos 0km estacionados de fondo",
          hook: "Los usados hay que lavarlos igual.",
          desc: "Dejás de tercerizar la preparación de cada unidad y encima lo convertís en un servicio que le vendés a tus clientes de posventa."
        },
        {
          title: "Lavaderos",
          image: "lavadero",
          alt: "SUV lavándose en un lavadero automático, con productos e insumos de lavado de fondo",
          hook: "Cuántos autos rechazás por semana.",
          desc: "Multiplicás la capacidad sin sumar personal, sin ampliar el local y sin cambiar cómo trabajás."
        },
        {
          title: "Playas de estacionamiento y cocheras",
          image: "parking",
          alt: "Auto lavándose en medio de una playa de estacionamiento al aire libre, rodeado de autos estacionados",
          hook: "Tenés los metros. Tenés los autos. Falta el servicio.",
          desc: "El auto está ahí parado igual. Convertís una plaza en una unidad que factura por hora."
        }
      ]
    },

    combo: {
      kicker: "El combo",
      title: "Dos equipos, dos ingresos",
      intro: "Mientras la M-LM535 lava el auto, el cliente puede usar el TT-303 para aspirar, inflar neumáticos o perfumar el interior. Dos fuentes de ingreso en el mismo espacio — y el TT-303 también capta al que solo pasa a aspirar o inflar, sin lavar.",
      maquinas: [
        {
          nombre: "M-LM535",
          rol: "El lavado automático completo",
          desc: "Puente de lavado roll-over: espuma con cepillado, cera líquida y secado en un solo ciclo."
        },
        {
          nombre: "TT-303",
          rol: "Aspiradora + inflador + aromatizante",
          desc: "Un equipo de autoservicio en la misma ubicación, sin necesidad de operador."
        }
      ],
      tt303SpecsTitle: "TT-303, datos técnicos",
      tt303Specs: [
        { label: "Medidas", value: "87 × 58 × 175 cm" },
        { label: "Peso", value: "175 kg" },
        { label: "Alimentación", value: "220V monofásico · 2.800 W" },
        { label: "Colector de polvo", value: "30 L" },
        { label: "Manguera de aire", value: "10 m" },
        { label: "Operación", value: "Autoservicio, sin operador" },
        { label: "Inflador", value: "Corte automático al llegar a la presión programada" },
        { label: "Aromatizante", value: "Una, dos o tres fragancias según el modelo" }
      ]
    },

    comoFunciona: {
      kicker: "Cómo funciona",
      title: "El ciclo, en cuatro pasos",
      pasos: [
        { n: "01", title: "Ingreso guiado", desc: "El auto entra guiado por el semáforo de posicionamiento." },
        { n: "02", title: "Elección del modo", desc: "Se elige el modo de lavado en la pantalla táctil de 10 pulgadas." },
        { n: "03", title: "Ciclo automático", desc: "La máquina completa el ciclo sola: espuma, cepillado, cera y secado." },
        { n: "04", title: "Salida", desc: "El auto sale seco, listo para circular." }
      ],
      featuresTitle: "Precisión del equipo",
      featuresLede: "Así resuelve cada situación del ciclo de lavado.",
      features: [
        { title: "Seguimiento de contorno", desc: "El cepillo superior se adapta a la forma de cada vehículo." },
        { title: "Cepillos laterales angulados", desc: "Se inclinan siguiendo la carrocería del auto." },
        { title: "Esquive automático de espejos", desc: "Detecta y esquiva los espejos retrovisores durante el ciclo." },
        { title: "Cepillo de zócalos", desc: "Cubre la parte baja de los laterales." },
        { title: "Cobertura frontal y trasera", desc: "Los cepillos laterales cruzan la línea central para cubrir bien frente y parte trasera." },
        { title: "Secador de altura regulable", desc: "Secador superior con sensor fotoeléctrico que ajusta la altura." },
        { title: "Monitoreo de tensión de correa", desc: "Controla en forma continua la correa del cepillo superior." },
        { title: "Bomba dosificadora alemana", desc: "Bomba dosificadora proporcional de fabricación alemana." },
        { title: "Autodiagnóstico", desc: "Códigos de error en pantalla ante cualquier falla." },
        { title: "Sistema anticongelamiento", desc: "Por debajo de 4°C, purga el agua de las cañerías." }
      ]
    },

    modos: {
      kicker: "Modos de lavado",
      title: "Cuatro modos, configurables",
      lede: "Los modos son configurables según el tipo de servicio que quiera ofrecer cada negocio.",
      tabla: [
        { modo: "1", incluye: "Espuma con cepillado, cera líquida y secado", tiempo: "3,25 min" },
        { modo: "2", incluye: "Espuma con cepillado y cera líquida", tiempo: "3 min" },
        { modo: "3", incluye: "Espuma con cepillado, enjuague con agua limpia, cera y secado", tiempo: "6 min" },
        { modo: "4", incluye: "Solo secado", tiempo: "2,5 min" }
      ]
    },

    numeros: {
      kicker: "Los números del negocio",
      title: "Lo que cuesta lavar un auto",
      consumoTitle: "Consumo por lavado",
      consumo: [
        { label: "Agua", value: "110 a 150 litros" },
        { label: "Químico de lavado", value: "19 mL" },
        { label: "Cera", value: "15 mL" },
        { label: "Energía", value: "0,7 a 1,5 kWh" }
      ],
      calculadora: {
        title: "Calculá tu facturación estimada",
        autosLabel: "Autos por día",
        precioLabel: "Precio por lavado ($)",
        autosDefault: 40,
        autosMin: 1,
        autosMax: 200,
        precioDefault: 8000,
        precioStep: 500,
        resultLabel: "Facturación mensual estimada (30 días)",
        disclaimer: "Estimación de facturación bruta. No incluye costos fijos del local, personal, insumos ni impuestos."
      }
    },

    control: {
      kicker: "Control desde el celular",
      title: "Gestioná el negocio sin estar ahí",
      lede: "La máquina está conectada a una plataforma de gestión que se puede revisar desde el celular, estés donde estés.",
      items: [
        { title: "Lavados realizados", desc: "Cantidad de autos atendidos en tiempo real." },
        { title: "Modos utilizados", desc: "Qué programas eligen los clientes." },
        { title: "Consumo", desc: "Agua y electricidad consumidas." },
        { title: "Ingresos y egresos", desc: "El movimiento económico del negocio." }
      ]
    },

    incluye: {
      kicker: "Qué incluye",
      title: "Lo que recibís con la M-LM535",
      items: [
        "La máquina M-LM535",
        "Instalación con supervisión técnica del fabricante",
        "38 repuestos originales sin cargo",
        "Capacitación de uso",
        "Asesoramiento posventa"
      ],
      personalizacion: {
        title: "Personalización",
        intro: "Una estación de servicio o una concesionaria va a querer su propia identidad en el equipo.",
        colores: ["Blanco (estándar)", "Azul", "Amarillo", "Verde", "Rojo", "Negro"],
        marca: "Posibilidad de aplicar la marca del comprador en la máquina y en la terminal de control."
      }
    },

    respaldo: {
      kicker: "Respaldo técnico",
      title: "Componentes de primera línea",
      componentes: [
        { label: "Motorreductores", value: "SITI (Italia)" },
        { label: "Componentes eléctricos", value: "Schneider Electric" },
        { label: "Sensores", value: "Omron" },
        { label: "Bomba dosificadora", value: "Proporcional, fabricación alemana" },
        { label: "Estructura", value: "Acero galvanizado por inmersión en caliente" },
        { label: "Circuito de control", value: "48V (baja tensión de seguridad)" }
      ],
      highlights: [
        { title: "100.000 lavados", desc: "Vida útil estimada de los cepillos." },
        { title: "Técnico local", desc: "Mantenimiento a cargo de un técnico local: inspecciones diarias, engrase de rodamientos y cadenas, limpieza de sensores." },
        { title: "Químicos nacionales", desc: "Se recomiendan productos neutros, de pH cercano a 7, disponibles en Argentina. No hay dependencia de insumos importados." }
      ]
    },

    faq: {
      kicker: "Preguntas frecuentes",
      title: "Lo que preguntan antes de instalarla",
      items: [
        {
          q: "¿Qué necesito para instalarla?",
          a: "<ul><li>43 m² totales, que incluyen la máquina, el recorrido del vehículo y una sala de máquinas de 2 × 1,5 m</li><li>Altura libre de 3,5 m</li><li>Conexión trifásica 380V, 30,5 kW</li><li>Tanque de agua de 2 toneladas</li><li>Compresor de aire de 2,2 kW, 100 L, 0,8 MPa</li><li>Aire comprimido a 0,6–0,8 MPa</li></ul>"
        },
        {
          q: "¿Qué vehículos puede lavar?",
          a: "Hasta 5,4 m de largo, 2,2 m de ancho y 2,0 m de alto. Cubre autos, SUV, vans y vehículos comerciales de menos de 7 asientos."
        },
        {
          q: "¿Funciona en invierno?",
          a: "Sí. El sistema purga el agua de las cañerías por debajo de 4°C para evitar congelamiento."
        },
        {
          q: "¿Se puede instalar al aire libre?",
          a: "Consultar el caso puntual. Se recomienda contar con estructura de protección."
        },
        {
          q: "¿Cuánto ocupa la máquina en sí?",
          a: "2,45 × 3,7 × 2,9 metros, sobre rieles de 9,5 metros."
        },
        {
          q: "¿Cuál es la garantía y los plazos de entrega e instalación?",
          a: "Estamos confirmando estos datos con el fabricante. Escribinos por WhatsApp y te los confirmamos al momento."
        }
      ]
    },

    contacto: {
      kicker: "Contacto",
      title: "¿Hablamos de tu próxima M-LM535?",
      lede: "Contanos tu caso y te asesoramos sobre la instalación y la oportunidad de negocio.",
      whatsappNote: "O escribinos directo por WhatsApp"
    }
  };
})();

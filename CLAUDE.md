# IA Wash — sitio web (M-LM535)

Landing de una sola página para IA Wash, orientada a la venta B2B de la **M-LM535** (puente de lavado automático con cepillos, roll-over, del fabricante Mattias). Sitio estático (HTML/CSS/JS vanilla, sin build step), pensado para subir por FTP a Hostinger.

**El sitio está en construcción por etapas**: hoy termina en la sección de precios ("Inversión") — no tiene FAQ, formulario de contacto, sección de modos de lavado, calculadora de facturación ni la vieja sección "El combo" (M-LM535 + TT-303). Todo eso existió en versiones anteriores del sitio y se sacó a propósito para reordenar el contenido; es esperable que se vuelva a agregar en rondas futuras — no es un olvido.

## Historia del proyecto

Este sitio reemplazó por completo a una versión anterior construida para una máquina de lavado **sin contacto** (touchless) de otro fabricante, cuyo proyecto no siguió adelante. El cambio de máquina no fue cosmético: el argumento de venta pasó de "no toca el auto" a **velocidad y capacidad de lavado**. Por eso el contenido se reescribió desde cero (no se adaptó) y se eliminaron todos los videos/fotos de la máquina anterior (mostraban un sistema sin cepillos, lo cual habría sido engañoso combinado con la nueva máquina, que sí los usa).

**No usar en ningún lado**: "sin contacto", "touchless", "no toca el auto", "sin cepillos", ni datos técnicos de la máquina anterior. Las funciones de precisión de la M-LM535 (seguimiento de contorno, esquive de espejos, monitoreo de correa) se presentan como inteligencia del equipo, nunca como defensa ante el riesgo de rayado por cepillos.

**En la sección "El equipo" específicamente** (`#combo` en el HTML — el id quedó de una versión anterior, el contenido ya no es sobre un combo de dos máquinas): no mencionar "M-LM535", "TT-303", "roll-over" ni ningún código de modelo. Se habla siempre de "el equipo" o "la máquina". El resto del sitio (hero, `<title>`, meta description, etc.) sí puede nombrar el modelo.

## Público objetivo y tono

**A quién le habla el sitio**: a alguien que tiene un espacio disponible en un lugar de mucho tránsito vehicular y quiere convertirlo en una unidad de negocio (estaciones de servicio, concesionarias, lavaderos que quieren multiplicar capacidad, playas de estacionamiento, emprendedores con terreno bien ubicado). No es un sitio para el conductor que va a lavar su auto — el foco es el inversor/operador.

**Idea central**: el negocio del lavado siempre estuvo limitado por cuántos autos puede lavar una persona por hora. La M-LM535 saca ese techo (8 a 16 autos/hora).

**Sobre el personal**: la máquina no reemplaza al personal, cambia su función — nadie lava a mano, pero sí hace falta alguien que gestione, cobre y repase detalles. **No prometer un negocio sin empleados.** El valor está en la cantidad de autos por hora, no en el ahorro de sueldos.

**Tono**: directo, concreto, orientado a números. Sin superlativos ni lenguaje publicitario inflado.

**Funciones que NO hay que publicar como incluidas** (figuran como opcionales en la ficha del fabricante y podrían no venir en el equipo entregado): anticolisión de seguridad, operación desatendida, pago electrónico y liquidación inteligente, prelavado de alta presión, guía inteligente de estacionamiento, parada automática por baja temperatura, lavado de ruedas, limpieza profunda de chasis. Si alguna termina incluida en el paquete comercializado, se agrega al contenido en ese momento.

**Medio de pago del TT-303**: no publicar cuál es (la ficha del fabricante menciona sistemas de pago chinos, no confirmados para Argentina).

## Stack

- `index.html` — toda la estructura de la página
- `styles.css` — un solo archivo, organizado por secciones numeradas
- `main.js` — IIFE, monta contenido dinámico desde `lib/manifest.js` y maneja nav/reveals/tilt. No tiene lógica de calculadora, FAQ ni formulario (esas secciones no existen todavía en esta etapa del sitio).
- `lib/manifest.js` — datos de contenido (`window.__BRAND__`): `contact`, `hero`, `marquee`, `oportunidad`, `equipo`, `comoFunciona`, `soporte`, `precios`
- `lib/gsap.min.js`, `lib/ScrollTrigger.min.js` — animaciones de scroll (stagger reveals únicamente; no hay parallax de hero porque el hero no tiene video de fondo, solo la foto del equipo)
- `assets/img/` — logo, favicons, foto del equipo (`machine-mlm535`), diagrama de instalación (`diagrama-instalacion`) y las 4 fotos de perfiles de negocio (`estacion-de-servicio`, `concesionaria`, `lavadero`, `parking`). Todas en WebP con fallback PNG vía `<picture>`.
- `.htaccess` — cache headers para Hostinger

## Paleta y tipografía

Sin cambios respecto al proyecto anterior:

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#ffffff` | Fondo general |
| `--bg-2` | `#eef8ff` | Fondo secciones alternadas (`.section-alt`) |
| `--bg-navy` | `#00284c` | Fondo hero, specs panel, calculadora, control, contacto, footer |
| `--ink` | `#00284c` | Texto principal (nunca negro puro) |
| `--ink-mute` | `#5c7c99` | Texto secundario/mute |
| `--accent` | `#2bbefa` | Azul eléctrico — acento principal |
| `--accent-2` | `#0090d9` | Azul eléctrico oscuro — hover, valores destacados |

- **Display** (`--display`): Anton — títulos en mayúscula
- **Body/UI** (`--sans`): Poppins (400–800)

## Estructura de secciones (en orden)

1. **Nav** — logo + menú (Cómo funciona / El equipo / Inversión) + CTA "Hablar por WhatsApp" (link directo a `wa.me`, siempre visible, con label corto "WhatsApp" por debajo de los 600px). El menú solo lista anclas que existen en la página — si se agrega una sección nueva, sumarla acá; si se saca una, sacar su link.
2. **Hero** (`#top`) — layout de dos columnas en desktop (una en mobile/tablet, <1024px): a la izquierda título + bajada + botón "Ver cómo funciona" (`.hero-content`), a la derecha la foto del equipo sobre un glow radial sutil, sin panel blanco (`.hero-media`). Debajo de ambas columnas, a todo el ancho, la franja de **3 datos destacados** (`.hero-stats-band`: "8 a 16 / autos por hora", "Hasta 128 / autos por día", "En solo 43 / m² de espacio" — el prefijo "Hasta"/"En solo" es parte del número, en tamaño menor). Datos en `manifest.js` → `hero`.
3. **Marquee** — cinta de texto en loop con 3 pares frase + dato de negocio (nunca nombra el modelo ni "roll-over"), separados por "•" tanto dentro del par como entre pares; el dato va en opacidad reducida para diferenciarse de la frase. Datos en `manifest.js` → `marquee`.
4. **Para qué tipo de negocio sirve** (`#oportunidad`) — sin intro (se sacó el kicker/título/párrafos de "La oportunidad"): arranca directo con un título grande centrado en celeste (`.profile-section-title`, mismo tratamiento en todas las secciones que lo usan) seguido de una grilla de 4 tarjetas con imagen (`.profile-grid`/`.profile-card`: foto 3:2 + título de rubro + frase destacada + párrafo). 4 columnas desktop, 2 entre 768–1024px, 1 en mobile, todas la misma altura. Datos en `manifest.js` → `oportunidad`.
5. **El equipo** (`#combo` — el id es heredado de una versión anterior, no renombrado) — otro título grande centrado en celeste, después diagrama de instalación + lista de 5 datos de espacio/conexión en dos columnas (`.equipo-grid`/`.equipo-diagram`/`.equipo-datos`, diagrama primero al apilarse bajo 1024px), y por último las 4 etapas del ciclo como tarjetas (`.cycle-grid`/`.cycle-card`, mismo estilo que "Cómo funciona") con una línea de cierre centrada debajo. Ver la advertencia de naming de modelo más arriba. Datos en `manifest.js` → `equipo`.
6. **Cómo funciona** (`#como-funciona`) — únicamente los 4 pasos del ciclo (`.cycle-grid`/`.cycle-card`, 4/2/1 columnas). Ya no incluye la sub-sección "Precisión del equipo" (10 funciones inteligentes) — se sacó por completo. Datos en `manifest.js` → `comoFunciona`.
7. **Soporte** (`#soporte`) — título grande centrado en celeste + 5 tarjetas (`.soporte-grid`/`.brand-card`) sobre químicos locales, vida útil de cepillos, repuestos incluidos, mantenimiento local y vida útil general del equipo. `.soporte-grid` usa flexbox con wrap y `justify-content: center` (no grid de columnas fijas) precisamente porque 5 no divide parejo en 2/3/4 columnas — así la fila incompleta que sobra en pantallas angostas queda centrada en vez de pegada a la izquierda. Datos en `manifest.js` → `soporte`.
8. **Inversión** (`#precios`, fondo navy — es la sección de cierre actual de la página) — mismo título grande centrado que el resto, pero en `var(--accent)` en vez de `--accent-2` para que contraste mejor sobre navy (ver `.section-navy .profile-section-title`). Adentro, en este orden: una card centrada (`.price-card`, borde celeste sutil + glow radial detrás) con el precio **"USD 46.000"** — es a propósito el elemento tipográfico más grande de toda la página, más grande que el titular del hero en cualquier ancho de pantalla (comparar los `clamp()` de `.price-value` vs `.hero-title` si se edita cualquiera de los dos) — más una bajada y el plazo de entrega ("60 días...") como dato secundario dentro de la misma card; después una línea de tiempo de 3 hitos de pago conectados por flechas (`.price-timeline`/`.timeline-step`, horizontal en desktop, vertical con flechas rotadas en mobile, mismo patrón que se usó antes para las etapas del ciclo); una línea de cierre chica; y el botón "Hablar por WhatsApp". A propósito **no** tiene precios tachados, cuenta regresiva, etiquetas de oferta ni colores de alarma — el peso visual es 100% tipografía/contraste/espaciado, tono B2B serio. Datos en `manifest.js` → `precios`.
9. **Footer** — logo, links (mismos que el nav), copyright.

No hay sección de modos de lavado, números del negocio/calculadora, control desde el celular, qué incluye/personalización, respaldo técnico (tabla de componentes), FAQ ni formulario de contacto — se sacaron todas en la última ronda y se espera que vuelvan en el futuro, reordenadas.

## Datos de contacto

`manifest.js` → `contact`: WhatsApp `+54 9 351 763-1708` (formato `wa.me/5493517631708`), email `jccasih@gmail.com`. Todo elemento con `[data-contact-whatsapp]` recibe automáticamente el link de `wa.me` vía `main.js` → `mountContact`.

## Pendientes

- Reagregar, reordenadas, las secciones que se sacaron: modos de lavado, números del negocio (con la calculadora de facturación), control desde el celular, qué incluye/personalización, respaldo técnico (componentes + garantías), FAQ y contacto (formulario + requisitos de instalación).
- Cuando vuelva el contacto, confirmar con el fabricante: garantía, plazos de entrega e instalación.
- Si en algún momento se retoma la idea del combo con un segundo equipo de autoservicio, confirmar antes su integración de pago local.
- `tools/` es solo para scripts de desarrollo, no se sube al hosting.

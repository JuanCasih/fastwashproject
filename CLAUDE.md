# IA Wash — sitio web (M-LM535)

Landing de una sola página para IA Wash, orientada a la venta B2B de la **M-LM535** (puente de lavado automático con cepillos, roll-over, del fabricante Mattias) y su combo con la **TT-303** (aspiradora + inflador + aromatizante de autoservicio). Sitio estático (HTML/CSS/JS vanilla, sin build step), pensado para subir por FTP a Hostinger.

## Historia del proyecto

Este sitio reemplazó por completo a una versión anterior construida para una máquina de lavado **sin contacto** (touchless) de otro fabricante, cuyo proyecto no siguió adelante. El cambio de máquina no fue cosmético: el argumento de venta pasó de "no toca el auto" a **velocidad y capacidad de lavado**. Por eso el contenido se reescribió desde cero (no se adaptó) y se eliminaron todos los videos/fotos de la máquina anterior (mostraban un sistema sin cepillos, lo cual habría sido engañoso combinado con la nueva máquina, que sí los usa).

**No usar en ningún lado**: "sin contacto", "touchless", "no toca el auto", "sin cepillos", ni datos técnicos de la máquina anterior. Las funciones de precisión de la M-LM535 (seguimiento de contorno, esquive de espejos, monitoreo de correa) se presentan como inteligencia del equipo, nunca como defensa ante el riesgo de rayado por cepillos.

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
- `main.js` — IIFE, monta contenido dinámico desde `lib/manifest.js`, maneja nav/reveals/tilt, y la lógica de la calculadora, el acordeón de FAQ y el formulario de contacto
- `lib/manifest.js` — datos de contenido (`window.__BRAND__`): hero, oportunidad, combo, cómo funciona, modos, números del negocio, control, qué incluye, respaldo técnico, FAQ, contacto
- `lib/gsap.min.js`, `lib/ScrollTrigger.min.js` — animaciones de scroll (stagger reveals únicamente; no hay parallax de hero porque el hero no tiene video/imagen de fondo)
- `assets/img/` — logo y favicons únicamente. No hay fotos/videos reales de la M-LM535 ni de la TT-303 todavía — si se consiguen, agregarlas a `assets/img/` (o `assets/video/`) y sumarlas donde sume (hero, cómo funciona, combo).
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

1. **Nav** — logo + menú (Cómo funciona / El combo / Números del negocio / Preguntas frecuentes / Contacto) + CTA "Hablar por WhatsApp" (link directo a `wa.me`, no a `#contacto`)
2. **Hero** (`#top`) — sin video de fondo (deliberado: no hay footage real de la M-LM535 y reusar el de la máquina anterior sería engañoso). Fondo navy sólido con un glow decorativo. Título + bajada + **3 datos destacados** (`.hero-stats`: 8–16 autos/hora, 2,5–6 min/auto, 43 m²) + botón de WhatsApp visible desde el primer scroll. Datos en `manifest.js` → `hero`.
3. **Marquee** — cinta de texto en loop con frases de posicionamiento nuevo (autos/hora, roll-over, combo, gestión desde el celular). Datos en `manifest.js` → `marquee`.
4. **La oportunidad** (`#oportunidad`) — párrafos sobre el cuello de botella del lavado tradicional + grilla de perfiles de negocio a los que les sirve la máquina (`.benefit-grid`, reutilizado). Datos en `manifest.js` → `oportunidad`.
5. **El combo** (`#combo`) — M-LM535 + TT-303 presentadas como sistema de dos ingresos (`.combo-grid`/`.combo-card`), más specs técnicas del TT-303 en un panel oscuro (`.specs-panel`/`.spec-row`, reutilizado). Datos en `manifest.js` → `combo`.
6. **Cómo funciona** (`#como-funciona`) — 4 pasos del ciclo (`.cycle-grid`, reutilizado) + 10 funciones inteligentes del equipo (`.benefit-grid`, reutilizado) presentadas como precisión, no como defensa ante rayones. Datos en `manifest.js` → `comoFunciona`.
7. **Modos de lavado** (`#modos`) — tabla de 4 modos configurables (`.data-table` dentro de `.table-wrap`, con scroll horizontal en mobile). Datos en `manifest.js` → `modos`.
8. **Los números del negocio** (`#numeros`) — sección más importante del sitio: tabla de consumo por lavado (agua, químico, cera, energía) + **calculadora interactiva** (`.calculator`, slider de autos/día + input de precio → facturación mensual estimada, calculada en vivo por `main.js` → `initCalculator`). Deja explícito que es facturación bruta, sin costos fijos. Datos en `manifest.js` → `numeros`.
9. **Control desde el celular** (`#control`, fondo navy) — 4 capacidades de la plataforma de gestión (`.contact-grid`/`.contact-card`, reutilizado). Datos en `manifest.js` → `control`.
10. **Qué incluye** (`#incluye`) — checklist de lo que trae el paquete (`.include-list`) + panel de personalización (colores disponibles + branding del comprador). Datos en `manifest.js` → `incluye`.
11. **Respaldo técnico** (`#respaldo`) — componentes de marca (SITI, Schneider Electric, Omron, bomba alemana, estructura galvanizada, circuito 48V) en `.specs-panel`/`.spec-row`, más 3 cards de tranquilidad (`.brand-block`/`.brand-card`: vida útil de cepillos, técnico local, químicos nacionales). Datos en `manifest.js` → `respaldo`.
12. **Preguntas frecuentes** (`#faq`) — acordeón (`.faq-list`/`.faq-item`, un ítem abierto a la vez, animado con CSS grid `0fr`/`1fr`, sin medir alturas por JS). `main.js` → `initFAQ` maneja el toggle. Requisitos de instalación van acá, sin protagonismo. Incluye placeholder honesto para garantía/plazos ("a confirmar con el fabricante"). Datos en `manifest.js` → `faq`.
13. **Contacto** (`#contacto`, fondo navy) — formulario de 4 campos (nombre, teléfono, tipo de negocio, ubicación) + link directo de WhatsApp. El sitio es estático y no tiene backend: al enviar el formulario, `main.js` → `initContactForm` arma un mensaje de WhatsApp con los datos cargados y abre `wa.me` con ese texto (no hace un POST a ningún servidor). Datos en `manifest.js` → `contacto`.
14. **Footer** — logo, links, copyright.

## Datos de contacto

`manifest.js` → `contact`: WhatsApp `+54 9 351 763-1708` (formato `wa.me/5493517631708`), email `jccasih@gmail.com`. Todo elemento con `[data-contact-whatsapp]` recibe automáticamente el link de `wa.me` vía `main.js` → `mountContact`.

## Pendientes

- No hay fotos ni videos reales de la M-LM535 ni de la TT-303 — el sitio es 100% tipográfico por ahora. Si se consiguen, considerar sumarlos al hero y a "Cómo funciona".
- Confirmar con el fabricante: garantía, plazos de entrega e instalación (hoy son un placeholder en el FAQ que deriva a WhatsApp).
- Confirmar la integración de pago local del TT-303 antes de publicar cualquier mención al respecto.
- `tools/` es solo para scripts de desarrollo, no se sube al hosting.

# Fast Wash — sitio web

Landing de una sola página para Fast Wash (importador/operador del sistema de lavado sin contacto Cheer Wash CL600 en Argentina). Sitio estático (HTML/CSS/JS vanilla, sin build step), pensado para subir por FTP a Hostinger.

## Público objetivo

El público de la web **no se limita a dueños de lavaderos existentes**. Incluye explícitamente:

- Estaciones de servicio
- Shoppings a cielo abierto
- Complejos comerciales
- Cualquier punto estratégico con buen tráfico de autos

Al redactar o editar copy, evitar asumir "lavadero" como único tipo de cliente — usar lenguaje inclusivo de estos otros rubros (ver Hero, CTAs y sección "Quiénes somos" como referencia de tono). La única excepción es la comparación "lavadero tradicional vs. Fast Wash" en la sección Ventajas, donde "lavadero tradicional" es intencional: ahí se refiere al modelo de negocio que se compara, no al público al que le hablamos.

## Stack

- `index.html` — toda la estructura de la página
- `styles.css` — un solo archivo, organizado por secciones numeradas
- `main.js` — IIFE, monta contenido dinámico desde `lib/manifest.js` y maneja nav/reveals/wash-stages/tilt
- `lib/manifest.js` — datos de contenido (`window.__BRAND__`): stats, comparación, ciclo, specs, wash stages, beneficios, mercado, contacto
- `lib/gsap.min.js`, `lib/ScrollTrigger.min.js` — animaciones de scroll (parallax del hero, stagger reveals)
- `assets/img/` — logo, posters (WebP)
- `assets/video/` — hero + `assets/video/stages/` (las 5 etapas de "Así se ve en acción", MP4 comprimidos)
- `.htaccess` — cache headers para Hostinger

## Paleta

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#ffffff` | Fondo general |
| `--bg-2` | `#eef8ff` | Fondo secciones alternadas (`.section-alt`) |
| `--bg-navy` | `#00284c` | Fondo hero, specs panel, contacto, footer |
| `--ink` | `#00284c` | Texto principal (nunca negro puro) |
| `--ink-mute` | `#5c7c99` | Texto secundario/mute |
| `--accent` | `#2bbefa` | Azul eléctrico — acento principal |
| `--accent-2` | `#0090d9` | Azul eléctrico oscuro — hover, valores destacados |
| `--cream` | `#ffffff` | Texto sobre fondo navy |

Excluidos a propósito: negro puro, gris oscuro, rojo, amarillo, turquesa (definido en el brief original de marca).

## Tipografía

- **Display** (`--display`): Anton — títulos en mayúscula, estilo cartel/poster americano
- **Body/UI** (`--sans`): Poppins (400–800)
- Google Fonts, cargadas con `preconnect` + `display=swap`

## Estructura de secciones (en orden)

1. **Nav** — logo + menú + CTA "Quiero saber más"
2. **Hero** (`#top`) — video de fondo (`hero.mp4`), título "El futuro del lavado de autos llegó a Argentina", tagline "Pagás. Lavás. Te vas.", línea de credibilidad ("Distribuidores oficiales de Cheer Wash — fábrica líder en China con más de 6.000 casos exitosos en 70+ países")
3. **Marquee** — cinta de texto en loop (sin contacto / sin turno / 6 a 9 minutos / cuida tu pintura)
4. **Ventajas** (`#ventajas`) — comparación lavadero tradicional vs. Fast Wash, con animación: la fila aparece → se tacha el problema → se revela la solución (todo con delay progresivo vía CSS, ver `.compare-old`/`.compare-arrow`/`.compare-new` en `styles.css`)
5. **Cómo funciona** (`#como-funciona`) — ciclo de 6 pasos de lavado
6. **Así se ve en acción** (`#galeria`) — intro contenida (kicker + título + bajada) seguida de una secuencia de 5 videos reales del ciclo del Cheer Wash CL600 (footage oficial del fabricante, no ilustrativo), cada uno en una card contenida (`aspect-ratio: 16/9`, dentro del `.container`, no full-bleed), una debajo de la otra, en orden:
   1. **Prelavado** — enjuague de chasis/llantas + espuma de presoak
   2. **Espuma** — espuma en cascada ("lava foam") con luces LED
   3. **Alta presión** — lavado a presión recíproco, hasta 100 bar
   4. **Cera** — aplicación de cera líquida
   5. **Secado** — secado por aire, +90% de efectividad

   Cada etapa: autoplay muted al entrar en viewport (pausa al salir), botón de mute/unmute propio, indicador "N° + nombre" en la esquina inferior izquierda de la card que aparece con fade al entrar la etapa, fade-in general de la card (sin slide) para que la transición entre etapas no se sienta cortada. Videos en `assets/video/stages/`, datos en `manifest.js` → `washStages`, lógica en `main.js` → `mountWashStages` / `initWashStages`, estilos en `styles.css` → sección "Wash stages".
7. **Beneficios de negocio** (`#beneficios`) — 3 cards: "Sin personal operativo", "Abierto las 24 horas", "Más autos, mismo tiempo" (el punto 3 se presenta como capacidad teórica según tiempo de ciclo, no como garantía de clientes reales)
8. **Tecnología** (`#tecnologia`) — panel de specs reales del CL600 + 3 cards de respaldo técnico (separación agua/espuma, anticolisión, separación agua/electricidad). Va después de "Beneficios de negocio" a propósito: primero el argumento de negocio, después el respaldo técnico que lo sostiene.
9. **Mercado** (`#mercado`) — 4 stat cards con datos de crecimiento del mercado mundial de lavado sin contacto (fuentes: Future Market Report, SkyQuest, Coherent Market Insights) + texto de cierre destacado sobre inversión mundial 2019–2022
10. **Oportunidad** (`#oportunidad`) — quiénes somos, qué hace Fast Wash en Argentina
11. **Contacto** (`#contacto`) — WhatsApp/email (pendientes de completar en `lib/manifest.js` → `contact`) + tagline de cierre
12. **Footer** — logo, links, copyright

## Pendientes

- Completar `contact.whatsapp` y `contact.email` en `lib/manifest.js` (hoy son `null` con placeholder visible)
- `tools/` es solo para scripts de desarrollo, no se sube al hosting

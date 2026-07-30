# Fast Wash — sitio web

Landing de una sola página para Fast Wash (importador/operador del sistema de lavado sin contacto Cheer Wash CL600 en Argentina). Sitio estático (HTML/CSS/JS vanilla, sin build step), pensado para subir por FTP a Hostinger.

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
2. **Hero** (`#top`) — video de fondo (`hero.mp4`), título "El futuro del lavado de autos llegó a Argentina", tagline "Pagás. Lavás. Te vas.", flash stats (6–9 min / 0mm contacto / 4 modos)
3. **Marquee** — cinta de texto en loop (sin contacto / sin turno / 6 a 9 minutos / cuida tu pintura)
4. **Ventajas** (`#ventajas`) — comparación lavadero tradicional vs. Fast Wash, con animación: la fila aparece → se tacha el problema → se revela la solución (todo con delay progresivo vía CSS, ver `.compare-old`/`.compare-arrow`/`.compare-new` en `styles.css`)
5. **Cómo funciona** (`#como-funciona`) — ciclo de 6 pasos de lavado
6. **Tecnología** (`#tecnologia`) — panel de specs reales del CL600 + 3 cards de respaldo técnico (separación agua/espuma, anticolisión, separación agua/electricidad)
7. **Así se ve en acción** (`#galeria`) — **[rediseñada]** intro contenida (kicker + título + bajada) seguida de una secuencia full-bleed de 5 videos reales del ciclo del Cheer Wash CL600 (footage oficial del fabricante, no ilustrativo), uno debajo del otro a 100svh cada uno, en orden:
   1. **Prelavado** — enjuague de chasis/llantas + espuma de presoak
   2. **Espuma** — espuma en cascada ("lava foam") con luces LED
   3. **Alta presión** — lavado a presión recíproco, hasta 100 bar
   4. **Cera** — aplicación de cera líquida
   5. **Secado** — secado por aire, +90% de efectividad

   Cada etapa: autoplay muted al entrar en viewport (pausa al salir), botón de mute/unmute propio, indicador "N° + nombre" en la esquina inferior izquierda que aparece con fade al entrar la etapa (así se siente que "se actualiza" al scrollear), fade-in general de la sección (sin slide) para que la transición entre etapas no se sienta cortada. Videos en `assets/video/stages/`, datos en `manifest.js` → `washStages`, lógica en `main.js` → `mountWashStages` / `initWashStages`, estilos en `styles.css` → sección "Wash stages".
8. **Beneficios de negocio** (`#beneficios`) — **[nueva]** 3 cards: "Sin personal operativo", "Abierto las 24 horas", "Más autos, mismo tiempo" (el punto 3 se presenta como capacidad teórica según tiempo de ciclo, no como garantía de clientes reales)
9. **Mercado** (`#mercado`) — **[nueva]** 4 stat cards con datos de crecimiento del mercado mundial de lavado sin contacto (fuentes: Future Market Report, SkyQuest, Coherent Market Insights) + texto de cierre destacado sobre inversión mundial 2019–2022
10. **Oportunidad** (`#oportunidad`) — quiénes somos, qué hace Fast Wash en Argentina
11. **Contacto** (`#contacto`) — WhatsApp/email (pendientes de completar en `lib/manifest.js` → `contact`) + tagline de cierre
12. **Footer** — logo, links, copyright

Secciones 8 y 9 van inmediatamente después de "Galería" y antes de "Oportunidad".

## Pendientes

- Completar `contact.whatsapp` y `contact.email` en `lib/manifest.js` (hoy son `null` con placeholder visible)
- `tools/` es solo para scripts de desarrollo, no se sube al hosting

# David Lopera — Landing Page Personal Brand

## Original Problem Statement
Single-page landing page profesional de alta conversión (brochure digital ejecutivo) para vender servicios de consultoría de David Lopera. Estética futurista ejecutiva (estilo Adidas/Nike/agencia premium), dark hero con acentos eléctricos, fondo `#080808` + acento `#1E90FF` + cyan `#00D4FF`. Stack: HTML5 puro + CSS3 + JS Vanilla (sin React/Vue), Google Fonts (Syne + DM Sans + JetBrains Mono), Lucide Icons CDN, Calendly embed inline, FormSpree form action.

## Architecture
- **Stack final**: Single-file HTML (`/app/frontend/public/standalone.html`) servido directamente como archivo estático.
- **Root URL** (`/`): React `App.js` renderiza un `<iframe>` full-screen apuntando a `/standalone.html` para que la URL raíz muestre la landing.
- **Descarga directa**: `/standalone.html` también es descargable como archivo standalone (FAB inferior-derecha + URL directa) para subir a Hostinger / Vercel / GitHub Pages.

## User
- David Lopera — consultor senior CX/CRM/Marketing Digital, Colombia/LATAM (14+ años).
- Email: davidloperacx@gmail.com · WhatsApp +57 310 384 4519 · LinkedIn linkedin.com/in/davidloperaCX · Calendly calendly.com/davidloperacx

## Implemented (Dec 2025)
- **10 secciones**: Navbar fijo (transparent → blur scrolled), Hero 100vh, Credibility bar (white, contadores animados), 12 Servicios (grid 3-col, hover azul + glow), Sobre mí (white 50/50 + foto cuadrada), Resultados/Casos (3 tarjetas + foto landscape CX Day Colombia), Proceso timeline (4 pasos), Contacto (Calendly inline embed + formulario FormSpree + WhatsApp/Email/LinkedIn), Recursos (3 cards), Footer.
- **3 fotos reales** integradas vía Emergent CDN (hero portrait, sobre mí cuadrado, casos landscape).
- **Animaciones**: Intersection Observer reveal (fade + translateY), contadores con `requestAnimationFrame` (easeOutCubic), navbar scroll con `classList`.
- **Responsive**: 3 breakpoints (480/768/1024px). Mobile-first. Hero H1 con clamp y wrap específico.
- **Iconos**: Lucide via CDN (compass, git-branch, megaphone, layers, bot, etc.).
- **Tipografía**: Syne ExtraBold (display) · DM Sans (body) · JetBrains Mono (mono).
- **FormSpree**: action `https://formspree.io/f/mqenlpwa` con submit AJAX + estados success/error.
- **Calendly**: widget inline embed + CTA externo en navbar y contacto.
- **SEO**: meta description, og:title/description/image, locale es_CO, favicon SVG inline DL.
- **data-testid**: incluidos en todos los elementos interactivos clave (CTAs, form fields, cards).

## Implementation Notes
- Single source of truth: `/app/frontend/public/standalone.html` (~50 KB, todo inline).
- React App reducido a un único componente iframe (App.js), CSS de host minimal (overflow:hidden).
- No backend usado — sin endpoints `/api`, MongoDB intacto sin tocarse.

## Backlog / Possible Next Iterations
**P1**
- Push a GitHub conectando branch para deploy automático en Vercel/Hostinger.
- Reemplazar logos placeholder de empresas (Eficacia, Pharmetique, CC Cali, UAO) con SVGs reales si David los provee.
- Hoja de vida real (PDF) en lugar de href="#" en botón "Descargar hoja de vida".

**P2**
- Sección Recursos: enlazar a artículos reales en Medium/Substack o blog propio.
- Tracking: Google Analytics 4 + Meta Pixel (gtag) para medir conversión de CTAs y formulario.
- A/B testing del headline principal vía variante con `?v=b` y JS condicional.
- Lead magnet downloadable (e.g., "Guía 5 KPIs CX") para capturar email antes de Calendly.

**P3**
- Internacionalización ES/EN para clientes LATAM con audiencia bilingüe.
- Dark/light mode toggle (actualmente alterna por sección, no por preferencia usuario).
- Testimoniales en video de clientes (Pharmetique, CC Cali).

## Test Credentials
N/A — no auth, no DB.

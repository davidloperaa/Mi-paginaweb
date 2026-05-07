# 🚀 Guía de Deploy — David Lopera Landing

Esta carpeta `/dist-hostinger/` contiene los archivos LISTOS para subir a Hostinger.

## Archivos
- `index.html` — Tu landing page principal (será la URL raíz: davidloperacx.com)
- `guia-marketing-digital-ia-2026.html` — La guía PDF/lead magnet (URL: davidloperacx.com/guia-marketing-digital-ia-2026.html)

Eso es todo. NO necesitas subir nada más. Las imágenes, fuentes y librerías cargan desde CDNs externos automáticamente.

---

## PASO A PASO HOSTINGER

### Camino A — Manual (5 minutos · más fácil)

1. Entra a Hostinger → Hosting → tu dominio → **Administrar**
2. Click en **Administrador de Archivos** (File Manager)
3. Navega a la carpeta `public_html/`
4. Borra el `index.html` que viene por defecto (página de bienvenida de Hostinger)
5. Click en **Subir Archivos** y arrastra los 2 archivos de esta carpeta
6. Verifica visitando tu dominio en el navegador
7. Para activar SSL: hPanel → Seguridad → SSL → Instalar certificado gratuito

### Camino B — Git automático desde GitHub (recomendado para actualizar en el tiempo)

1. En Emergent, click el botón **"SAVE TO GITHUB"** (ya tienes conectado)
2. Confirma el push al repo (todo /app se sube)
3. Entra a Hostinger → hPanel → **Avanzado → Git**
4. Click **Crear Repositorio**:
   - **URL del repositorio**: la URL de tu repo GitHub
   - **Branch**: `main`
   - **Ruta de instalación**: `public_html/`
5. **IMPORTANTE**: Después del primer pull, en File Manager mueve los archivos:
   - `frontend/public/standalone.html` → renombra a `public_html/index.html`
   - `frontend/public/guia-marketing-digital-ia-2026.html` → mueve a `public_html/`
6. Activa **Auto-deploy** para que cada push a GitHub actualice tu sitio
7. Activa SSL (mismo paso que Camino A)

---

## CONECTAR DOMINIO (si compraste dominio aparte)

Si tu dominio NO lo tienes en Hostinger todavía:

1. En tu registrador (GoDaddy, Namecheap, etc.) cambia los DNS a Hostinger:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
2. Espera propagación (15 min – 24h)
3. En Hostinger hPanel → Dominios → Agregar dominio
4. Listo

---

## INTEGRAR BREVO (delivery automático del PDF)

### Paso 1 — Cuenta Brevo (gratis)
1. Ve a https://www.brevo.com/es/ → **Crear cuenta gratis**
2. Verifica tu email
3. En el wizard: elige plan **Free** (300 emails/día gratis)

### Paso 2 — Crear lista
1. Menú izquierdo → **Contactos → Listas**
2. **Crear nueva lista**: nombre `Lead Magnet · Marketing Digital IA 2026`
3. Guarda el **ID de la lista** (lo verás como número, ej: 7)

### Paso 3 — Crear formulario de suscripción
1. Menú izquierdo → **Contactos → Formularios**
2. **Crear formulario**:
   - Tipo: **Plain HTML form** (form HTML simple)
   - Lista destino: la que creaste en Paso 2
   - Habilita **Double opt-in**: NO (para que el flow sea inmediato)
3. Personaliza los campos:
   - EMAIL (obligatorio)
   - FIRSTNAME (Nombre)
   - ROLE (texto libre)
4. **Guarda y publica** → Brevo te da un código HTML
5. **Busca en ese HTML el atributo `action="https://..."`** y cópialo. Se ve así:
   ```
   action="https://abc.sendinblue.com/abc/abc/aBcDeF"
   ```

### Paso 4 — Conectar a tu landing
1. Abre `frontend/public/standalone.html` en Emergent
2. Busca: `const BREVO_LIST_FORM_URL = '';`
3. Pega tu URL: `const BREVO_LIST_FORM_URL = 'https://abc.sendinblue.com/abc/abc/aBcDeF';`
4. Re-deploy (push a GitHub o sube manualmente)

### Paso 5 — Email automatizado con la guía
1. Brevo → **Automatización** → **Crear workflow**
2. Trigger: **Contact added to list** (selecciona tu lista del Paso 2)
3. Acción: **Send email**
4. Crea email con asunto: `Tu guía: 10 jugadas de Marketing Digital con IA 2026 ✓`
5. Cuerpo:
   ```
   Hola {{ FIRSTNAME }},

   Como prometí, aquí tienes la guía:
   👉 https://TUDOMINIO.com/guia-marketing-digital-ia-2026.html

   Léela tranquilo. Si después de leerla quieres conversar 30 min sobre cuál de las jugadas tendría más impacto en tu negocio, agenda aquí:
   👉 https://calendly.com/davidloperacx

   Saludos,
   David Lopera
   davidloperacx@gmail.com · WhatsApp +57 310 384 4519
   ```
6. **Activa el workflow**

### Resultado final
- Visitante completa el form → Brevo recibe el contacto + FormSpree te alerta a tu inbox
- Visitante ve mensaje "✓ Listo · abriendo guía en nueva pestaña..." y la guía se abre
- En 1-2 minutos recibe email automático con el link permanente
- Quedó suscrito a tu lista para futuros nurturing emails

---

## CHECKLIST FINAL ✓

Antes de mandar tráfico pago a la landing, valida:

- [ ] Sitio carga en tu dominio con HTTPS (candado verde)
- [ ] Botones de WhatsApp llevan al chat con mensaje pre-llenado
- [ ] Form de cotización envía email a tu inbox (haz prueba con tu correo)
- [ ] Form del Lead Magnet abre la guía + recibes contacto en Brevo
- [ ] Calendly se carga embebido en sección Contacto
- [ ] Hoja de vida descarga el PDF correcto
- [ ] Brochure PDF se genera y descarga
- [ ] Mobile: hamburger menu funciona, foto se ve, fluido

# Conti Talent — Universidad Continental Huancayo

Plataforma oficial de **reclutamiento y evaluación** de la Universidad Continental Huancayo. Una sola institución, varios postulantes: prácticas, plazas docentes y oportunidades de investigación.

Construida con HTML5 semántico, CSS3 moderno y JavaScript vanilla — **sin frameworks, sin código inline**. Lista para migrar a Spring Boot + Thymeleaf.

---

## 🚀 Cómo ejecutar

```bash
# Con Python
python -m http.server 8080
# o con Node
npx serve .
```

Abre `http://localhost:8080` y entra por `index.html`.

### Cuentas demo (semilla `seeded_v3`)

| Rol | Email | Password |
|-----|-------|----------|
| Administrador | `admin@contitalent.com` | `admin123` |
| Postulante (Lucía) | `lucia@example.com` | `lucia123` |
| Postulante (Carlos) | `carlos@example.com` | `carlos123` |
| Postulante (María) | `maria@example.com` | `maria123` |
| Postulante (Pedro) | `pedro@example.com` | `pedro123` |
| Postulante (Andrea) | `andrea@example.com` | `andrea123` |
| Postulante (Diego) | `diego@example.com` | `diego123` |
| Postulante (Fiorella) | `fiorella@example.com` | `fiora123` |

> Cada postulante tiene su cuenta de usuario real. Para reiniciar la base, borra las claves `conti-talent:*` del localStorage.

---

## 🏛️ Modelo del sistema

**Universidad Continental Huancayo** publica ofertas y los postulantes (estudiantes y profesionales) se inscriben. El sistema maneja dos tipos de oferta:

- **Práctica** · pre-profesionales y profesionales por facultad.
- **Trabajo** · plazas docentes, coordinación, investigación.

Cada oferta pertenece a una **facultad** (Ingeniería, Ciencias de la Empresa, Derecho, Humanidades, Ciencias de la Salud, Investigación y Desarrollo).

### Flujo del postulante
1. Navega áreas / ofertas sin autenticación.
2. Filtra por **tipo de oferta** (Práctica / Trabajo), facultad o modalidad.
3. Se registra (página separada del login).
4. Postula y sube CV.
5. Rinde el cuestionario técnico (una sola vez).
6. Sigue el avance en *Mi estado*.
7. Revisa sus respuestas en *Mis respuestas* (solo lectura).

### Flujo del administrador
- CRUD de facultades, ofertas, preguntas y usuarios.
- **Crea postulantes** asignando un usuario existente a una oferta.
- Edita estados, reasigna ofertas, ajusta puntajes.
- Visualiza ranking y métricas (5 series de tiempo + 5 puntuales).
- Eliminación lógica (rechazo) o física.

---

## 🗂️ Estructura

```
conti-talent/
├── index.html                  ← Home (Universidad Continental)
├── login.html · registro.html  ← Acceso (separados)
├── contacto.html               ← Formulario completo
├── publicidad.html             ← Banner, beneficios + ofertas destacadas
├── areas.html                  ← Facultades
├── ofertas.html                ← Listado con filtro por tipo
├── detalle-oferta.html         ← Detalle + CTA postular
├── postular.html               ← Datos personales + CV
├── evaluacion.html             ← Cuestionario (1 sola vez)
├── mis-respuestas.html         ← Solo lectura: puntaje + opciones marcadas
├── mi-estado.html              ← Avance del postulante
│
├── admin/
│   ├── dashboard.html          ← KPIs + recientes
│   ├── admin-areas.html        ← CRUD facultades
│   ├── admin-ofertas.html      ← CRUD ofertas (con `tipo`)
│   ├── admin-preguntas.html    ← CRUD preguntas por oferta
│   ├── admin-postulantes.html  ← Gestión + creación de postulantes
│   ├── admin-usuarios.html     ← CRUD usuarios
│   └── admin-metricas.html     ← Series + ranking
│
├── css/
│   ├── base.css         ← Tokens, reset, tipografía + utilities
│   ├── layout.css       ← Header, sidebar, footer, hero, mobile drawer
│   ├── components.css   ← Botones, formularios, tablas, modals, toasts
│   ├── pages.css        ← Estilos por página + responsive
│   └── animations.css   ← Keyframes y utilities
│
└── js/
    ├── storage.js       ← Persistencia (localStorage)
    ├── seed.js          ← Datos iniciales (universidad)
    ├── ui.js · validators.js · auth.js · main.js
    ├── areas.js · ofertas.js · postulantes.js · usuarios.js · evaluacion.js
    ├── chart.js         ← Gráficos SVG
    └── page-*.js        ← Controlador por página
```

---

## ✨ Reglas de código aplicadas

- ✅ **Cero JS inline** en HTML (ni `<script>` con código, ni `onclick=""`).
- ✅ **Cero CSS inline** en HTML (ni `<style>`, ni `style=""`).
- ✅ **Etiquetas semánticas**: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- ✅ **JS modular** por funcionalidad (un controller por página).
- ✅ **Validaciones** centralizadas en `validators.js`.
- ✅ **Estados visuales** con badges para los 7 estados del postulante.
- ✅ **Responsive** (≤960, ≤768, ≤480) con menú hamburguesa que clona la nav o el sidebar admin.
- ✅ **Listo para Thymeleaf**: HTML semántico sin acoplamiento.

---

## 📊 Métricas

`admin/admin-metricas.html` implementa el patrón solicitado:

- **5 series de tiempo (8 meses)**: postulaciones recibidas, contrataciones efectivas, tiempo de cierre, puntaje promedio, tasa de aceptación.
- **5 indicadores puntuales**: postulantes activos, ofertas abiertas, entrevistas hoy, contrataciones del mes, tiempo promedio.
- **Ranking** filtrable por oferta.

Los gráficos están hechos con SVG puro (`js/chart.js`).

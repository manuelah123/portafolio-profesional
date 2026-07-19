# Sitio Web Portafolio

Un sitio web de portafolio moderno, responsivo y profesional diseñado para mostrar proyectos, habilidades técnicas y experiencia profesional. La aplicación fue desarrollada utilizando tecnologías modernas de desarrollo web y desplegada en la nube mediante servicios de Amazon Web Services (AWS), garantizando alto rendimiento, disponibilidad y escalabilidad.

---

## Tabla de Contenido

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Arquitectura de Despliegue en AWS](#arquitectura-de-despliegue-en-aws)
- [Amazon S3 (Static Website Hosting)](#amazon-s3-static-website-hosting)
- [Amazon CloudFront (CDN)](#amazon-cloudfront-cdn)
- [AWS Amplify](#aws-amplify)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Roadmap](#roadmap)
- [Autor](#autor)
- [Licencia](#licencia)

---

# Acerca del Proyecto

Este portafolio fue desarrollado con el objetivo de presentar proyectos personales, habilidades técnicas y experiencia profesional mediante una interfaz moderna, intuitiva y completamente adaptable a diferentes dispositivos.

El proyecto sigue las mejores prácticas del desarrollo Front-end, priorizando el rendimiento, la accesibilidad, la organización del código y una excelente experiencia de usuario.

Además, está preparado para ser desplegado como un sitio web estático utilizando los servicios de Amazon Web Services (AWS), ofreciendo una solución rápida, segura y altamente disponible.

---

# Características

- Diseño completamente responsivo.
- Interfaz moderna y profesional.
- Sección de presentación personal.
- Catálogo de proyectos desarrollados.
- Sección de habilidades técnicas.
- Información de contacto.
- Código organizado y fácil de mantener.
- Optimización para rendimiento.
- Fácil despliegue en la nube.
- Distribución global mediante CDN.

---

# Tecnologías Utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5

## Servicios Cloud

- Amazon S3
- Amazon CloudFront
- AWS Amplify

## Herramientas de Desarrollo

- Visual Studio Code
- Git
- GitHub

---

# Arquitectura de Despliegue en AWS

El proyecto fue diseñado para alojarse como un sitio web estático utilizando los servicios de Amazon Web Services.

Flujo de despliegue:

```
Desarrollador
       │
       ▼
Repositorio GitHub
       │
       ▼
Amazon S3
(Static Website Hosting)
       │
       ▼
Amazon CloudFront
(Content Delivery Network)
       │
       ▼
     Usuarios
```

Esta arquitectura proporciona:

- Alta disponibilidad.
- Escalabilidad.
- Baja latencia.
- Distribución global del contenido.
- Seguridad mediante HTTPS.
- Excelente rendimiento.

---

# Amazon S3 (Static Website Hosting)

Amazon S3 se utiliza para almacenar todos los archivos estáticos del proyecto, tales como:

- Archivos HTML
- Archivos CSS
- Archivos JavaScript
- Imágenes
- Íconos
- Documentos

Principales beneficios:

- Almacenamiento altamente confiable.
- Alta durabilidad de los datos.
- Bajo costo.
- Configuración sencilla.
- Hosting de sitios web estáticos.

---

# Amazon CloudFront (CDN)

Amazon CloudFront distribuye el contenido del sitio mediante una red global de servidores (Edge Locations), mejorando significativamente la velocidad de carga.

Beneficios:

- Menor tiempo de carga.
- Baja latencia.
- Distribución global.
- Caché de contenido.
- Compatibilidad con HTTPS.
- Mayor disponibilidad del sitio.
- Mejor experiencia para los usuarios.

---

# AWS Amplify

AWS Amplify puede utilizarse como alternativa para automatizar el despliegue del proyecto conectándolo directamente con GitHub.

Entre sus ventajas se encuentran:

- Despliegue continuo (CI/CD).
- Compilaciones automáticas.
- Actualizaciones automáticas.
- Gestión de ramas.
- Certificados SSL.
- Rollback automático.
- Integración directa con GitHub.

---

# Estructura del Proyecto

```
portfolio/
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── icons/
│
├── pages/
│
├── index.html
│
├── README.md
│
└── LICENSE
```

---

# Uso

1. Clonar el repositorio.

```bash
git clone https://github.com/tuusuario/portfolio.git
```

2. Ingresar al directorio del proyecto.

```bash
cd portfolio
```

3. Abrir el archivo principal.

```
index.html
```

También puede desplegarse directamente en Amazon S3 para su publicación en producción.

---

# Roadmap

Mejoras planificadas para futuras versiones:

- Implementación de modo oscuro.
- Filtro dinámico de proyectos.
- Blog personal.
- Descarga del currículum en PDF.
- Formulario de contacto conectado a un backend.
- Soporte para múltiples idiomas.
- Optimización del rendimiento.
- Mejoras de SEO.
- Mejoras de accesibilidad.
- Integración con herramientas de analítica.

---

# Autor

**Manuel Henao**

---

# Licencia

Este proyecto está distribuido bajo la licencia **MIT**.

Consulta el archivo **LICENSE** para obtener más información.

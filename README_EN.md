# Portfolio Website

A modern, responsive, and professional portfolio website designed to showcase projects, technical skills, and professional experience. The application is built with modern front-end technologies and deployed using AWS cloud services for high availability, security, and performance.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies](#technologies)
- [AWS Deployment Architecture](#aws-deployment-architecture)
- [Amazon S3 (Static Website Hosting)](#amazon-s3-static-website-hosting)
- [Amazon CloudFront (CDN)](#amazon-cloudfront-cdn)
- [AWS Amplify](#aws-amplify)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Author](#author)
- [License](#license)

---

# About the Project

This portfolio was developed to present personal projects, technical knowledge, and professional experience in a clean and intuitive interface.

The website focuses on responsive design, accessibility, performance, and maintainable code. It allows visitors to explore projects, learn about the developer, and access contact information through a modern user experience.

The project follows front-end best practices and can be easily deployed as a static website using Amazon Web Services (AWS).

---

# Features

- Responsive design for desktop, tablet, and mobile devices.
- Modern and intuitive user interface.
- Project showcase section.
- About Me section.
- Technical skills section.
- Contact information.
- Optimized performance.
- Clean and maintainable code.
- Easy deployment to AWS services.
- Fast content delivery through CDN.

---

# Technologies

### Front-end

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5

### Cloud Services

- Amazon S3
- Amazon CloudFront
- AWS Amplify

### Development Tools

- Visual Studio Code
- Git
- GitHub

---

# AWS Deployment Architecture

The project is designed to be deployed as a static website using Amazon Web Services.

Deployment workflow:

```
Developer
      │
      ▼
 GitHub Repository
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
     Users
```

This architecture provides:

- High availability
- Low latency
- Secure content delivery
- Global distribution
- Scalability

---

# Amazon S3 (Static Website Hosting)

Amazon S3 stores all static assets of the website, including:

- HTML files
- CSS files
- JavaScript files
- Images
- Icons
- Documents

Benefits include:

- High durability
- Reliable storage
- Low operational cost
- Easy deployment
- Static website hosting support

---

# Amazon CloudFront (CDN)

Amazon CloudFront distributes the website through a global network of edge locations.

Advantages:

- Faster page loading
- Reduced latency
- HTTPS support
- Improved availability
- Better user experience worldwide
- Content caching

---

# AWS Amplify

AWS Amplify can be used as an alternative deployment solution that connects directly with GitHub.

Benefits:

- Continuous deployment
- Automatic builds
- Automatic updates
- Branch deployments
- SSL certificates
- Easy rollback
- CI/CD integration

---

# Project Structure

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

# Usage

Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

Open the project folder:

```bash
cd portfolio
```

Run the website by opening:

```
index.html
```

or deploy it to Amazon S3 for production.

---

# Roadmap

Future improvements include:

- Dark mode
- Project filtering
- Blog section
- Downloadable resume
- Contact form with backend integration
- Multi-language support
- Performance optimization
- SEO improvements
- Accessibility enhancements
- Analytics integration

---

# Author

**Manuel Henao**

---

# License

This project is licensed under the MIT License.

See the **LICENSE** file for more information.

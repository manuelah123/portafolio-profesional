/**
 * =========================================
 * Lógica Principal del Portafolio (JavaScript)
 * =========================================
 * 1. Desplazamiento suave (Smooth Scrolling).
 * 2. Cambio de fondo de la barra de navegación al hacer scroll.
 * 3. Validación del formulario de contacto.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Efecto de la Barra de Navegación (Navbar) ---
    // Aquí hago que la barra cambie de color y tamaño cuando el usuario empieza a bajar por la página
    const navbar = document.getElementById("main-navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            navbar.classList.remove("py-3");
        } else {
            navbar.classList.remove("scrolled");
            navbar.classList.add("py-3");
        }
    });

    // --- 2. Desplazamiento suave (Smooth Scrolling) ---
    // Esto permite que al hacer clic en los enlaces del menú, la página baje suavemente hacia la sección elegida
    document.querySelectorAll('.navbar-nav a[href^="#"], .hero-section a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculo el espacio que ocupa el menú superior para que al bajar no tape el inicio de la sección
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });

                // Si estoy viendo el portafolio en el celular, cierro el menú hamburguesa automáticamente al elegir una opción
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                if (window.getComputedStyle(navbarToggler).display !== 'none' && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // --- 3. Validación del Formulario de Contacto ---
    // Usando las clases de validación de Bootstrap para comprobar que todos los campos requeridos estén llenos
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Como es un portafolio estático, evito que la página se recargue al intentar enviar datos irreales
                event.preventDefault();
                
                // Creo y muestro un mensaje visual de éxito en color verde (alerta de Bootstrap)
                const successMsg = document.createElement('div');
                successMsg.className = 'alert alert-success alert-dismissible fade show mt-3';
                successMsg.role = 'alert';
                successMsg.innerHTML = `
                    <strong>¡Solicitud enviada exitosamente!</strong> Gracias por tu interés.
                    <hr>
                    <p class="mb-0">Mientras me pongo en contacto contigo, te invito a descargar mi <a href="Manuela  _manuelahenaobedoya15@gmail.com.pdf" target="_blank" download="CV_Manuela_Henao_Bedoya.pdf" class="alert-link text-decoration-underline fw-bold">Currículum Vitae completo <i class="bi bi-file-earmark-pdf"></i></a>.</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
                
                // Lo inserto justo al final del formulario
                form.appendChild(successMsg);
                
                // Limpio las casillas del formulario para dejarlo como nuevo
                form.reset();
                form.classList.remove('was-validated');
                
                // Hago que el mensaje de éxito desaparezca él solo después de 5 segundos
                setTimeout(() => {
                    const alert = new bootstrap.Alert(successMsg);
                    alert.close();
                }, 5000);
                
                return false;
            }

            form.classList.add('was-validated');
        }, false);
    });
});

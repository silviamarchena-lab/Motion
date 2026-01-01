document.addEventListener("DOMContentLoaded", function () {
    // --- MENU MÓVIL ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            icon.classList.toggle("fa-times");
            icon.classList.toggle("fa-bars");
        });
    }

    // --- SCROLL SUAVE PARA EL MENÚ ---
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                // Cerrar menú móvil si está abierto
                navLinks.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });

    // --- FEED DE PERSONAJES (INSTAGRAM FEED) ---
    const instagramFeed = document.getElementById("instagramFeed");
    
    if (instagramFeed) {
        // Escribe: "ruta_de_la_foto | Nombre que quieres que salga"
        const placeholderImages = [
            "images/atractivo1.png | Boceto personaje",
            "images/atractivo2.png | Boceto personaje",
            "images/atractivo3.png | Boceto personaje",
            "images/pareja.jpg | Concept art",
            "images/buho.png | Boceto personaje",
            "images/escenario.png | Escenario",
            "images/gelatina.png | Personaje terminado",
            "images/movimiento.png | Guía de movimiento",
            "images/sentados.png | Dimensión y perspectiva"
        ];

        instagramFeed.innerHTML = ""; // Limpiar por si acaso

        placeholderImages.forEach((imgData) => {
            const [url, label] = imgData.split(" | ");
            
            const item = document.createElement("div");
            item.className = "instagram-item";
            item.style.backgroundImage = `url(${url.trim()})`;
            
            // Etiqueta de texto pequeña
            item.innerHTML = `<span class="image-label">${label}</span>`;
            
            instagramFeed.appendChild(item);
        });
    }
});
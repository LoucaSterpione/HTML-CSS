/* ===== SCRIPT.JS - PORTFOLIO BTS SIO ===== */
/* Fichier JavaScript pour ajouter de l'interactivité au portfolio */
/* À COMPLÉTER : Vous pouvez ajouter d'autres fonctionnalités si besoin */

// ===== FONCTION : Smooth Scroll (navigation fluide) =====
// Cette fonction permet de scroller en douceur vers les sections
document.addEventListener('DOMContentLoaded', function() {
    // Récupère tous les liens de navigation
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Récupère l'attribut href du lien
            const href = this.getAttribute('href');

            // Vérifie si le lien pointe vers une section (commence par #)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // Récupère la section cible
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    // Scroll en douceur vers la section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ===== FONCTION : Animation des éléments au scroll =====
// À COMPLÉTER : Décommentez si vous voulez activer les animations au scroll

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe 'fade-in'
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});


// ===== FONCTION : Formulaire de contact =====
// À COMPLÉTER : Configurez ce formulaire pour envoyer les emails
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Récupère les valeurs du formulaire
        const nom = this.querySelector('input[placeholder="Votre nom"]').value;
        const email = this.querySelector('input[placeholder="Votre email"]').value;
        const message = this.querySelector('textarea[placeholder="Votre message"]').value;

        // Validation simple
        if (!nom || !email || !message) {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }

        // À COMPLÉTER : Configurez l'envoi d'email
        // Option 1 : Utiliser un service comme FormSubmit.co
        // Option 2 : Utiliser EmailJS
        // Option 3 : Utiliser un backend (PHP, Node.js, etc.)

        // Pour maintenant, on affiche un message de confirmation
        alert('Merci pour votre message ! Je vous recontacterai très bientôt.');
        this.reset();
    });
}

// ===== FONCTION : Activer le lien actif dans la navigation =====
// Ajoute une classe 'active' au lien de navigation correspondant à la section visible
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== FONCTION : Animation de compteur (optionnel) =====
// À COMPLÉTER : Décommentez et utilisez cette fonction si vous avez des compteurs

function animateCounter(element, target, duration = 1000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}


// ===== FONCTION : Changer de thème clair/sombre =====
function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById('darkModeBtn');
    
    body.classList.toggle('dark-mode');

    // Change l'icône du bouton
    if (body.classList.contains('dark-mode')) {
        btn.textContent = '☀️';
        btn.title = 'Basculer au thème clair';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = '🌙';
        btn.title = 'Basculer au thème sombre';
        localStorage.setItem('theme', 'light');
    }
}

// Applique le thème sauvegardé et configure le bouton
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const btn = document.getElementById('darkModeBtn');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        btn.textContent = '☀️';
        btn.title = 'Basculer au thème clair';
    }
    
    // Ajoute l'événement de clic au bouton
    btn.addEventListener('click', toggleDarkMode);
});

// Écoute aussi les changements de préférences système
if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addListener((e) => {
        if (e.matches && !document.body.classList.contains('dark-mode')) {
            toggleDarkMode();
        }
    });
}


// ===== FONCTION : Charger dynamiquement les projets (optionnel) =====
// À COMPLÉTER : Utilisez cette fonction si vous avez beaucoup de projets
/*
const projects = [
    {
        id: 1,
        title: 'Nom du projet 1',
        description: 'Description du projet',
        image: 'images/projet1.jpg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'lien-vers-le-projet.html'
    },
    {
        id: 2,
        title: 'Nom du projet 2',
        description: 'Description du projet',
        image: 'images/projet2.jpg',
        technologies: ['Python', 'SQLite'],
        link: 'lien-vers-le-projet.html'
    }
    // À COMPLÉTER : Ajoutez d'autres projets
];

function displayProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="technologies"><strong>Technologies :</strong> ${project.technologies.join(', ')}</p>
                <a href="${project.link}" class="btn btn-secondary">Voir le projet</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Appelle la fonction au chargement
displayProjects();
*/

// ===== FONCTION BONUS : Afficher la date actuelle =====
// À COMPLÉTER : Vous pouvez utiliser cette fonction pour afficher la date
function updateYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();

    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

updateYear();

// À COMPLÉTER : Ajoutez d'autres fonctions JavaScript selon vos besoins
// Exemples :
// - Validation de formulaire plus avancée
// - Galerie d'images avec lightbox
// - Filtrage de projets par catégorie
// - Intégration avec une API
// - Etc.

console.log('Portfolio chargé avec succès !');

// Dictionnaire de traduction DIRECTEMENT dans le script (pas de fichier JSON externe)
const translations = {
    en: {
        // Navigation
        "À propos": "About",
        "Projets": "Projects",
        "Services": "Services",
        "Contact": "Contact",

        // Home
        "Bonjour, je suis": "Hello, I'm",
        "FANOMEZANTSOA Cathalie": "FANOMEZANTSOA <br> Cathalie",
        "Créative": "Creative",
        "Développeuse": "Developer",
        "& Experte digitale": "& Digital Expert",
        "CV": "RESUME",

        // About
        "La créativité Est ma passion": "Creativity <br>Is My Passion",
        "Une jeune professionnelle de l'informatique spécialisée dans l'expertise digitale et le développement web. Concentrée sur la création de sites fonctionnels et la résolution de problèmes techniques avec un code propre et efficace. Passionnée par la compréhension de la manière dont les outils numériques peuvent répondre à des besoins concrets.": "A young <b>IT professional</b> specializing in digital expertise and web development. Focused on building functional websites and solving technical problems with clean, efficient code. Passionate about understanding how digital tools can serve real-world needs.",

        // Projects
        "Je réalise d'incroyables Projets": "I Make Incredible <br><span>Projects</span>",
        "Site d'hôtel": "Hotel website",
        "Site de restauration": "Restauration website",
        "Site d'e-learning": "e-learning website",
        "ChatBot": "ChatBot",
        "Technologies utilisées": "Technologies used",

        // Work/Experience
        "Mon Parcours Professionnel": "<span>My Work</span> <br>Experience",
        "Expérience": "Experience",
        "Formation": "Education",
        "Développeuse Web": "Web Developer",
        "Web Designer": "Web Designer",
        "SEO & Optimisation Web": "SEO & Web Optimization",
        "Développement web et stratégie digitale": "Web development and digital strategy",
        "Design UI/UX avec Figma": "UI/UX Design with Figma",
        "Performance et visibilité": "Performance and visibility",
        "Aujourd'hui": "Now",
        "Licence en Informatique": "Bachelor's Degree in Computer Science",
        "Spécialisation en développement web, maîtrise des technologies pour créer des sites fonctionnels.": "Specialization in web development, mastering technologies to build functional websites.",

        // Services
        "Ce que je Propose": "What I <span>Offer</span>",
        "Développeuse_Service": "Developer",
        "Designer": "Designer",
        "Compétences & Outils": "Skills & Tools",
        "Modélisation 3D": "3D Modeling",
        "Création de sites web avec HTML, CSS, JavaScript et Python. Sites professionnels avec Django.": "Website creation with HTML, CSS, JavaScript and Python. Professional websites with Django.",
        "Web designer avec Figma, création de motion design avec After Effects, Canva et un design au top.": "Web designer with Figma, creating motion design with After Effects, Canva and design at its best.",

        // Testimonials
        "Ce qu'ils disent À mon sujet": "<span>What They Say</span> <br>About Me",

        // Contact
        "Contactez-moi": "Contact Me",
        "Parlez-moi de votre prochain projet.": "Tell me about your next project.",
        "Copier l'email": "Copy email",
        "Email": "Email",
        "Localisation": "Location",
        "Antananarivo, Madagascar": "Antananarivo, Madagascar",
        "Réseaux sociaux": "Social Media",
        "Écrivez-moi & Nous parlerons": "Write Me & We'll Talk",

        // Footer
        "Tous droits réservés à Cathalie": "All Rights Reserved By <span>Cathalie</span>"
    },
    fr: {
        // Navigation
        "About": "À propos",
        "Projects": "Projets",
        "Services": "Services",
        "Contact": "Contact",

        // Home
        "Hello, I'm": "Bonjour, je suis",
        "FANOMEZANTSOA Cathalie": "FANOMEZANTSOA <br> Cathalie",
        "Creative": "Créative",
        "Developer": "Développeuse",
        "& Digital Expert": "& Experte digitale",
        "RESUME": "CV",

        // About
        "Creativity Is My Passion": "La créativité <br>Est ma passion",
        "A young IT professional specializing in digital expertise and web development. Focused on building functional websites and solving technical problems with clean, efficient code. Passionate about understanding how digital tools can serve real-world needs.": "Une jeune <b>professionnelle de l'informatique</b> spécialisée dans l'expertise digitale et le développement web. Concentrée sur la création de sites fonctionnels et la résolution de problèmes techniques avec un code propre et efficace. Passionnée par la compréhension de la manière dont les outils numériques peuvent répondre à des besoins concrets.",

        // Projects
        "I Make Incredible Projects": "Je réalise d'incroyables <br><span>Projets</span>",
        "Hotel website": "Site d'hôtel",
        "Restauration website": "Site de restauration",
        "e-learning website": "Site d'e-learning",
        "ChatBot": "ChatBot",
        "Technologies used": "Technologies utilisées",

        // Work/Experience
        "My Work Experience": "<span>Mon Parcours</span> <br>Professionnel",
        "Experience": "Expérience",
        "Education": "Formation",
        "Web Developer": "Développeuse Web",
        "Web Designer": "Web Designer",
        "SEO & Web Optimization": "SEO & Optimisation Web",
        "Web development and digital strategy": "Développement web et stratégie digitale",
        "UI/UX Design with Figma": "Design UI/UX avec Figma",
        "Performance and visibility": "Performance et visibilité",
        "Now": "Aujourd'hui",
        "Bachelor's Degree in Computer Science": "Licence en Informatique",
        "Specialization in web development, mastering technologies to build functional websites.": "Spécialisation en développement web, maîtrise des technologies pour créer des sites fonctionnels.",

        // Services
        "What I Offer": "Ce que je <span>Propose</span>",
        "Developer_Service": "Développeuse",
        "Designer": "Designer",
        "Skills & Tools": "Compétences & Outils",
        "3D Modeling": "Modélisation 3D",
        "Website creation with HTML, CSS, JavaScript and Python. Professional websites with Django.": "Création de sites web avec HTML, CSS, JavaScript et Python. Sites professionnels avec Django.",
        "Web designer with Figma, creating motion design with After Effects, Canva and design at its best.": "Web designer avec Figma, création de motion design avec After Effects, Canva et un design au top.",

        // Testimonials
        "What They Say About Me": "<span>Ce qu'ils disent</span> <br>À mon sujet",

        // Contact
        "Contact Me": "Contactez-moi",
        "Tell me about your next project.": "Parlez-moi de votre prochain projet.",
        "Copy email": "Copier l'email",
        "Email": "Email",
        "Location": "Localisation",
        "Antananarivo, Madagascar": "Antananarivo, Madagascar",
        "Social Media": "Réseaux sociaux",
        "Write Me & We'll Talk": "Écrivez-moi & Nous parlerons",

        // Footer
        "All Rights Reserved By Cathalie": "Tous droits réservés à <span>Cathalie</span>"
    }
};

// Langue actuelle
let currentLang = localStorage.getItem('preferredLang') || 'fr';

// Fonction pour changer la langue
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    // Met à jour les boutons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Parcourt tous les éléments textuels
    const textElements = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, a, span, button, ' +
        '.nav__link, .home__greeting, .home__name, .home__split, ' +
        '.home__profession-1, .home__profession-2, .about__description, ' +
        '.projects__title, .projects__subtitle, .projects__description, ' +
        '.work__title, .work__subtitle, .work__description, ' +
        '.services__title, .services__description, .services__skill, ' +
        '.testimonials__name, .testimonials__number, .testimonials__data p, ' +
        '.contact__description, .contact__title, .contact__adress, ' +
        '.contact__link, .footer__copy'
    );

    textElements.forEach(el => {
        // Ignorer les éléments vides
        if (!el.innerText.trim()) return;

        // Normaliser le texte : retirer les espaces multiples et les sauts de ligne
        const rawText = el.innerText.trim();
        const normalizedText = rawText.replace(/\s+/g, ' ');

        // Chercher la traduction (essaie d'abord la version normalisée, puis brute)
        const translation =
            (translations[lang] && translations[lang][normalizedText]) ||
            (translations[lang] && translations[lang][rawText]);

        if (translation) {
            el.innerHTML = translation;
        }
    });

    console.log('Langue changée en :', lang);
}

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    console.log('Traducteur prêt!');

    // Ajouter les événements aux boutons
    setTimeout(() => {
        const langButtons = document.querySelectorAll('.lang-btn');
        if (langButtons.length > 0) {
            langButtons.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    changeLanguage(this.dataset.lang);
                });
            });

            // Initialiser avec la langue sauvegardée
            changeLanguage(currentLang);
        } else {
            console.error('Boutons de langue non trouvés!');
        }
    }, 1000);
});
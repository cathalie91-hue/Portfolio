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

        // Descriptions Expérience
        "Développement web et stratégie digitale, création de sites fonctionnels et sur mesure avec un accent sur la performance et l'optimisation.": "Web development and digital strategy, creating functional, custom websites with a focus on performance and optimization.",
        "Web design et création UI/UX avec Figma, conception d'interfaces intuitives et visuellement attractives pour des sites web modernes.": "Web design and UI/UX creation using Figma, crafting intuitive and visually appealing interfaces for modern websites.",
        "SEO et optimisation web : amélioration des performances, de la vitesse et de la visibilité d'un site pour enrichir l'expérience utilisateur et le référencement.": "SEO & web optimization: improving site performance, speed, and visibility to enhance user experience and search engine ranking.",

        // Descriptions Formation
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
        "Elle a intégré une scène 3D sur Spline à mon site et le résultat est vraiment réussi. L'animation est légère, bien pensée et s'intègre parfaitement au design. Elle a su rendre quelque chose de technique à la fois esthétique et fluide. Je la recommande sans hésiter.": "She integrated a 3D scene on Spline into my site and the result is really successful. The animation is light, well thought out and fits perfectly with the design. She managed to make something technical both aesthetic and fluid. I recommend her without hesitation.",
        "Site livré rapidement et conforme à mes attentes. Merci pour ton implication.": "Site delivered quickly and meeting my expectations. Thank you for your involvement.",
        "Franchement, j'adore ce que tu fais. Tes animations 3D donnent une vraie personnalité au site, c'est soigné et fluide. Continue comme ça, tu gères vraiment.": "Honestly, I love what you do. Your 3D animations give real personality to the site, it's neat and fluid. Keep it up, you really know what you're doing.",
        "Je te confierais un projet sans hésiter. Tu es rigoureuse, à l'écoute et le rendu final est toujours soigné. Un travail de qualité, mené avec sérieux.": "I would entrust you with a project without hesitation. You are rigorous, attentive and the final result is always polished. Quality work, carried out seriously.",

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

        // Descriptions Expérience
        "Web development and digital strategy, creating functional, custom websites with a focus on performance and optimization.": "Développement web et stratégie digitale, création de sites fonctionnels et sur mesure avec un accent sur la performance et l'optimisation.",
        "Web design and UI/UX creation using Figma, crafting intuitive and visually appealing interfaces for modern websites.": "Web design et création UI/UX avec Figma, conception d'interfaces intuitives et visuellement attractives pour des sites web modernes.",
        "SEO & web optimization: improving site performance, speed, and visibility to enhance user experience and search engine ranking.": "SEO et optimisation web : amélioration des performances, de la vitesse et de la visibilité d'un site pour enrichir l'expérience utilisateur et le référencement.",

        // Descriptions Formation
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
        "She integrated a 3D scene on Spline into my site and the result is really successful. The animation is light, well thought out and fits perfectly with the design. She managed to make something technical both aesthetic and fluid. I recommend her without hesitation.": "Elle a intégré une scène 3D sur Spline à mon site et le résultat est vraiment réussi. L'animation est légère, bien pensée et s'intègre parfaitement au design. Elle a su rendre quelque chose de technique à la fois esthétique et fluide. Je la recommande sans hésiter.",
        "Site delivered quickly and meeting my expectations. Thank you for your involvement.": "Site livré rapidement et conforme à mes attentes. Merci pour ton implication.",
        "Honestly, I love what you do. Your 3D animations give real personality to the site, it's neat and fluid. Keep it up, you really know what you're doing.": "Franchement, j'adore ce que tu fais. Tes animations 3D donnent une vraie personnalité au site, c'est soigné et fluide. Continue comme ça, tu gères vraiment.",
        "I would entrust you with a project without hesitation. You are rigorous, attentive and the final result is always polished. Quality work, carried out seriously.": "Je te confierais un projet sans hésiter. Tu es rigoureuse, à l'écoute et le rendu final est toujours soigné. Un travail de qualité, mené avec sérieux.",

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

// Fonction utilitaire : normalise le texte pour une comparaison fiable
function normalizeText(text) {
    return text
        .replace(/\s+/g, ' ')           // espaces multiples / retours à la ligne → un seul espace
        .replace(/[''`]/g, "'")          // apostrophes courbes → droite
        .replace(/[""]/g, '"')           // guillemets courbes → droits
        .replace(/\u00A0/g, ' ')         // espace insécable → espace normal
        .trim();
}

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

        const normalized = normalizeText(el.innerText);

        // Chercher d'abord la version normalisée, puis brute
        const translation =
            (translations[lang] && translations[lang][normalized]) ||
            (translations[lang] && translations[lang][el.innerText.trim()]);

        if (translation) {
            el.innerHTML = translation;
        }
    });

    // Traduction du message WhatsApp pré-rempli
    const whatsappLink = document.querySelector('.contact__write .contact__link[href*="whatsapp"]');
    if (whatsappLink) {
        const phoneMatch = whatsappLink.href.match(/phone=(\d+)/);
        const phone = phoneMatch ? phoneMatch[1] : '261328399115';
        const message = lang === 'en'
            ? "Hello, I'm contacting you from your website"
            : "Bonjour, je vous contacte depuis votre site";
        whatsappLink.href = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    }

    // Met à jour l'attribut lang du HTML
    document.documentElement.lang = lang;

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
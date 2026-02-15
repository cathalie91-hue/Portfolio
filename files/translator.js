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
        "La créativité est ma passion": "Creativity <br>Is My Passion",
        "Une jeune professionnelle de l'informatique spécialisée en expertise digitale et développement web. Focus sur la création de sites web fonctionnels et la résolution de problèmes techniques avec un code propre et efficace. Passionnée par la compréhension de la façon dont les outils numériques peuvent répondre aux besoins concrets.": "A young <b>IT professional</b> specializing in digital expertise and web development. Focused on building functional websites and solving technical problems with clean, efficient code. Passionate about understanding how digital tools can serve real-world needs.",
        
        // Projects
        "Je crée des projets incroyables": "I Make Incredible <br><span>Projects</span>",
        "Site hôtelier": "Hotel website",
        
        // Work/Experience
        "Mon parcours professionnel": "<span>My Work</span> <br>Experience",
        "Expérience": "Experience",
        "Formation": "Education",
        
        // Services
        "Ce que je propose": "What I <span>Offer</span>",
        "Compétences & Outils": "Skills & Tools",
        "Modélisation 3D": "3D Modeling",
        
        // Testimonials
        "Ce qu'ils disent de moi": "<span>What They Say</span> <br>About Me",
        
        // Contact
        "Contactez-moi": "Contact Me",
        "Parlez-moi de votre prochain projet.": "Tell me about your next project.",
        "Copier l'email": "Copy email",
        "Email": "Email",
        "Localisation": "Location",
        "Antananarivo, Madagascar": "Antananarivo, Madagascar",
        "Réseaux sociaux": "Social Media",
        "Écrivez-moi & nous discuterons": "Write Me & We'll Talk",
        
        // Footer
        "Tous droits réservés par Cathalie": "All Rights Reserved By <span>Cathalie</span>"
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
        "Creativity Is My Passion": "La créativité <br>est ma passion",
        "A young IT professional specializing in digital expertise and web development. Focused on building functional websites and solving technical problems with clean, efficient code. Passionate about understanding how digital tools can serve real-world needs.": "Une jeune <b>professionnelle de l'informatique</b> spécialisée en expertise digitale et développement web. Focus sur la création de sites web fonctionnels et la résolution de problèmes techniques avec un code propre et efficace. Passionnée par la compréhension de la façon dont les outils numériques peuvent répondre aux besoins concrets.",
        
        // Projects
        "I Make Incredible Projects": "Je crée des <br><span>projets</span> incroyables",
        "Hotel website": "Site hôtelier",
        
        // Work/Experience
        "My Work Experience": "<span>Mon parcours</span> <br>professionnel",
        "Experience": "Expérience",
        "Education": "Formation",
        
        // Services
        "What I Offer": "Ce que <span>je propose</span>",
        "Skills & Tools": "Compétences & Outils",
        "3D Modeling": "Modélisation 3D",
        
        // Testimonials
        "What They Say About Me": "<span>Ce qu'ils disent</span> <br>de moi",
        
        // Contact
        "Contact Me": "Contactez-moi",
        "Tell me about your next project.": "Parlez-moi de votre prochain projet.",
        "Copy email": "Copier l'email",
        "Email": "Email",
        "Location": "Localisation",
        "Antananarivo, Madagascar": "Antananarivo, Madagascar",
        "Social Media": "Réseaux sociaux",
        "Write Me & We'll Talk": "Écrivez-moi & nous discuterons",
        
        // Footer
        "All Rights Reserved By Cathalie": "Tous droits réservés par <span>Cathalie</span>"
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
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, button, .nav__link, .home__greeting, .home__name, .home__split, .home__profession-1, .home__profession-2, .about__description, .projects__title, .projects__subtitle, .projects__description, .work__title, .work__subtitle, .work__description, .services__title, .services__description, .services__skill, .testimonials__name, .testimonials__number, .testimonials__data p, .contact__description, .contact__title, .contact__adress, .contact__link, .footer__copy');
    
    textElements.forEach(el => {
        // Ignorer les éléments vides
        if (!el.innerText.trim()) return;
        
        const originalText = el.innerText.trim();
        
        // Chercher la traduction
        if (translations[lang] && translations[lang][originalText]) {
            el.innerHTML = translations[lang][originalText];
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
    }, 1000); // Petit délai pour être sûr que tout est chargé
});
// GESTIONNAIRE DE THÈME - 100% FONCTIONNEL
(function() {
    // Attendre que la page soit chargée
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
    
    function initTheme() {
        console.log('Initialisation du thème...');
        
        // Récupérer les éléments
        const themeBtn = document.getElementById('theme-toggle');
        const palette = document.getElementById('theme-palette');
        
        if (!themeBtn || !palette) {
            console.error('Bouton thème non trouvé');
            return;
        }
        
        // Couleurs (basées sur ton hue par défaut: 330)
        const couleurs = [
            { hue: 330, nom: 'Rose' },
            { hue: 255, nom: 'Violet' },
            { hue: 220, nom: 'Bleu' },
            { hue: 300, nom: 'Rose clair' },
            { hue: 110, nom: 'Vert' },
            { hue: 180, nom: 'Cyan' },
            { hue: 15, nom: 'Orange' },
            { hue: 358, nom: 'Rouge' }
        ];
        
        // Vider et remplir la palette
        palette.innerHTML = '';
        couleurs.forEach(c => {
            const btn = document.createElement('button');
            btn.className = 'theme-option';
            btn.dataset.hue = c.hue;
            btn.style.backgroundColor = `hsl(${c.hue}, 90%, 55%)`;
            btn.title = c.nom;
            palette.appendChild(btn);
        });
        
        // Restaurer le thème sauvegardé
        const savedHue = localStorage.getItem('themeHue');
        if (savedHue) {
            document.documentElement.style.setProperty('--hue', savedHue);
        }
        
        // Ouvrir la palette au clic
        themeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            palette.classList.toggle('show');
        });
        
        // Changer la couleur
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const hue = this.dataset.hue;
                document.documentElement.style.setProperty('--hue', hue);
                localStorage.setItem('themeHue', hue);
                palette.classList.remove('show');
            });
        });
        
        // Fermer en cliquant ailleurs
        document.addEventListener('click', function() {
            palette.classList.remove('show');
        });
        
        palette.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        console.log('Thème prêt !');
    }
})();
// ===== GESTIONNAIRE DE THÈME - VERSION UNIFIÉE =====
// Couleurs + Mode clair/sombre dans la même palette

(function() {
    // Initialisation
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeManager);
    } else {
        initThemeManager();
    }
    
    function initThemeManager() {
        console.log('🎨 Gestionnaire de thème unifié chargé');
        createThemePalette();
    }
    
    function createThemePalette() {
        const themeBtn = document.getElementById('theme-toggle');
        const palette = document.getElementById('theme-palette');
        
        if (!themeBtn || !palette) {
            console.error('Éléments manquants');
            return;
        }
        
        // ===== 1. DÉFINIR LES COULEURS =====
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
        
        // ===== 2. CONSTRUIRE LA PALETTE =====
        palette.innerHTML = '';
        
        // 2.1 Ajouter les couleurs
        couleurs.forEach(c => {
            const btn = document.createElement('button');
            btn.className = 'theme-option';
            btn.dataset.hue = c.hue;
            btn.style.backgroundColor = `hsl(${c.hue}, 90%, 55%)`;
            btn.title = c.nom;
            palette.appendChild(btn);
        });
        
        // 2.2 Ajouter un séparateur
        const separator = document.createElement('div');
        separator.className = 'palette-separator';
        palette.appendChild(separator);
        
        // 2.3 Ajouter le bouton mode (clair/sombre)
        const modeBtn = document.createElement('button');
        modeBtn.className = 'palette-mode-btn';
        modeBtn.id = 'palette-mode-toggle';
        palette.appendChild(modeBtn);
        
        // ===== 3. RESTAURER LES PRÉFÉRENCES =====
        // Couleur
        const savedHue = localStorage.getItem('themeHue');
        if (savedHue) {
            document.documentElement.style.setProperty('--hue', savedHue);
        }
        
        // Mode (clair/sombre)
        const savedMode = localStorage.getItem('themeMode') || 'dark';
        document.documentElement.setAttribute('data-theme', savedMode);
        updateModeButton(modeBtn, savedMode);
        
        // ===== 4. GESTION DES ÉVÉNEMENTS =====
        
        // 4.1 Ouvrir/fermer la palette
        themeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            // Positionner la palette sous le bouton
            const btnRect = this.getBoundingClientRect();
            palette.style.top = (btnRect.bottom + 10) + 'px';
            palette.style.right = (window.innerWidth - btnRect.right) + 'px';
            
            palette.classList.toggle('show');
        });
        
        // 4.2 Changer la couleur
        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const hue = this.dataset.hue;
                
                // Appliquer la couleur
                document.documentElement.style.setProperty('--hue', hue);
                localStorage.setItem('themeHue', hue);
                
                // Fermer la palette
                palette.classList.remove('show');
            });
        });
        
        // 4.3 Changer le mode (clair/sombre)
        modeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const currentMode = document.documentElement.getAttribute('data-theme') || 'dark';
            const newMode = currentMode === 'dark' ? 'light' : 'dark';
            
            // Appliquer le mode
            document.documentElement.setAttribute('data-theme', newMode);
            localStorage.setItem('themeMode', newMode);
            
            // Mettre à jour le bouton
            updateModeButton(this, newMode);
            
            // Effet visuel
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
        
        // 4.4 Fermer en cliquant ailleurs
        document.addEventListener('click', function(e) {
            if (!palette.contains(e.target) && e.target !== themeBtn) {
                palette.classList.remove('show');
            }
        });
        
        // Empêcher la fermeture quand on clique dans la palette
        palette.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // 4.5 Fermer au scroll/resize
        window.addEventListener('scroll', () => palette.classList.remove('show'));
        window.addEventListener('resize', () => palette.classList.remove('show'));
    }
    
    // ===== FONCTION UTILITAIRE =====
    function updateModeButton(btn, mode) {
        if (mode === 'dark') {
            btn.textContent = '🌙 Mode sombre';
            btn.title = 'Passer en mode clair';
        } else {
            btn.textContent = '☀️ Mode clair';
            btn.title = 'Passer en mode sombre';
        }
    }
})();
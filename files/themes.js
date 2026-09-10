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

        couleurs.forEach(c => {
            const btn = document.createElement('button');
            btn.className = 'theme-option';
            btn.dataset.hue = c.hue;
            btn.style.backgroundColor = `hsl(${c.hue}, 90%, 55%)`;
            btn.title = c.nom;
            palette.appendChild(btn);
        });

        const separator = document.createElement('div');
        separator.className = 'palette-separator';
        palette.appendChild(separator);

        const modeBtn = document.createElement('button');
        modeBtn.className = 'palette-mode-btn';
        modeBtn.id = 'palette-mode-toggle';
        palette.appendChild(modeBtn);

        // ===== 3. RESTAURER LES PRÉFÉRENCES =====
        const savedHue = localStorage.getItem('themeHue');
        if (savedHue) {
            document.documentElement.style.setProperty('--hue', savedHue);
        }

        const savedMode = localStorage.getItem('themeMode') || 'dark';
        document.documentElement.setAttribute('data-theme', savedMode);
        updateModeButton(modeBtn, savedMode);

        // ===== 4. GESTION DES ÉVÉNEMENTS =====

        // 4.1 Ouvrir/fermer la palette
        themeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();

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
                document.documentElement.style.setProperty('--hue', hue);
                localStorage.setItem('themeHue', hue);
                palette.classList.remove('show');
            });
        });

        // 4.3 Changer le mode (clair/sombre)
        modeBtn.addEventListener('click', function(e) {
            e.stopPropagation();

            const currentMode = document.documentElement.getAttribute('data-theme') || 'dark';
            const newMode = currentMode === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newMode);
            localStorage.setItem('themeMode', newMode);

            updateModeButton(this, newMode);

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

        palette.addEventListener('click', function(e) {
            e.stopPropagation();
        });

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


// ===== EFFET MAGNÉTIQUE + TILT 3D SUR LES CARTES =====
(function() {
    function initMagneticTilt() {
        const cards = document.querySelectorAll('[data-tilt]');

        if (!cards.length) return;

        // Désactive l'effet sur mobile (tactile)
        if (window.matchMedia('(pointer: coarse)').matches) return;

        console.log('✨ Effet magnétique chargé sur', cards.length, 'cartes');

        const MAX_TILT = 15;
        const MAGNETIC_STRENGTH = 25;
        const RADIUS = 250;

        document.addEventListener('mousemove', (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;

                const distX = e.clientX - cardCenterX;
                const distY = e.clientY - cardCenterY;
                const distance = Math.hypot(distX, distY);

                if (distance < RADIUS) {
                    const strength = 1 - distance / RADIUS;

                    const moveX = (distX / RADIUS) * MAGNETIC_STRENGTH * strength;
                    const moveY = (distY / RADIUS) * MAGNETIC_STRENGTH * strength;

                    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -MAX_TILT * strength;
                    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * MAX_TILT * strength;

                    card.style.transform = `
                        translate3d(${moveX}px, ${moveY}px, 0)
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        scale(${1 + strength * 0.05})
                    `;

                    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
                    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
                    card.style.setProperty('--mouse-x', `${xPct}%`);
                    card.style.setProperty('--mouse-y', `${yPct}%`);
                } else {
                    card.style.transform = 'translate3d(0,0,0) perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                }
            });
        });

        document.addEventListener('mouseleave', () => {
            cards.forEach((card) => {
                card.style.transform = 'translate3d(0,0,0) perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });
    }

    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMagneticTilt);
    } else {
        initMagneticTilt();
    }
})();
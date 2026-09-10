// ===== GESTIONNAIRE DE THÈME + EFFET MAGNÉTIQUE =====

(function() {
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

        const savedHue = localStorage.getItem('themeHue');
        if (savedHue) {
            document.documentElement.style.setProperty('--hue', savedHue);
        }

        const savedMode = localStorage.getItem('themeMode') || 'dark';
        document.documentElement.setAttribute('data-theme', savedMode);
        updateModeButton(modeBtn, savedMode);

        themeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            const btnRect = this.getBoundingClientRect();
            palette.style.top = (btnRect.bottom + 10) + 'px';
            palette.style.right = (window.innerWidth - btnRect.right) + 'px';

            palette.classList.toggle('show');
        });

        document.querySelectorAll('.theme-option').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const hue = this.dataset.hue;
                document.documentElement.style.setProperty('--hue', hue);
                localStorage.setItem('themeHue', hue);
                palette.classList.remove('show');
            });
        });

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


// ===== EFFET MAGNÉTIQUE SUR LES CARTES DE COMPÉTENCES =====
(function() {
    function initMagnetic() {
        const cards = document.querySelectorAll('.skill-card');

        if (!cards.length) return;

        // Désactive sur mobile (tactile)
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const MAX_TILT = 15;
        const MAGNETIC_STRENGTH = 20;
        const RADIUS = 220;

        console.log('🧲 Effet magnétique chargé sur', cards.length, 'cartes');

        document.addEventListener('mousemove', (e) => {
            cards.forEach((card) => {
                const inner = card.querySelector('.skill-card__inner');
                if (!inner) return;

                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distX = e.clientX - centerX;
                const distY = e.clientY - centerY;
                const distance = Math.hypot(distX, distY);

                if (distance < RADIUS) {
                    const strength = 1 - distance / RADIUS;

                    const moveX = (distX / RADIUS) * MAGNETIC_STRENGTH * strength;
                    const moveY = (distY / RADIUS) * MAGNETIC_STRENGTH * strength;

                    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -MAX_TILT * strength;
                    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * MAX_TILT * strength;

                    inner.style.setProperty('--magnet-x', `${moveX}px`);
                    inner.style.setProperty('--magnet-y', `${moveY}px`);
                    inner.style.setProperty('--tilt-x', `${rotateX}deg`);
                    inner.style.setProperty('--tilt-y', `${rotateY}deg`);
                    inner.style.setProperty('--magnet-scale', `${1 + strength * 0.03}`);
                } else {
                    inner.style.setProperty('--magnet-x', '0px');
                    inner.style.setProperty('--magnet-y', '0px');
                    inner.style.setProperty('--tilt-x', '0deg');
                    inner.style.setProperty('--tilt-y', '0deg');
                    inner.style.setProperty('--magnet-scale', '1');
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMagnetic);
    } else {
        initMagnetic();
    }
})();
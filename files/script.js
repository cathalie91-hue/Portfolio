document.addEventListener('DOMContentLoaded', function() {
    
    function animateText(selector) {
        const el = document.querySelector(selector);
        if (!el) return;
        
        const text = el.innerText;
        el.innerHTML = text.split('').map(char => {
            if (char === ' ') return '&nbsp;';
            return `<span style="display: inline-block;">${char}</span>`;
        }).join('');
        
        anime({
            targets: el.querySelectorAll('span'),
            translateY: [
                { value: [100, 0], duration: 900, easing: 'easeOutCubic' },
                { value: -100, delay: 4000, duration: 900, easing: 'easeOutCubic' }
            ],
            delay: function(el, i) { return i * 80; },
            loop: true
        });
    }
    
    animateText('.home__profession-1');
    animateText('.home__profession-2');
    
});
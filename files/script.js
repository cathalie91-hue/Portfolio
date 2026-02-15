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

// Initialize Swiper

const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});


// Work Tabs
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const targetSelector = tab.dataset.target,
              targetContent = document.querySelector(targetSelector)

tabContents.forEach((content) => content.classList.remove('work__active'))
tabs.forEach((t) => t.classList.remove('work__active'))

tab.classList.add('work__active')
targetContent.classList.add('work__active')
    })
})

// Services
const servicesButtons = document.querySelectorAll('.services__button')

servicesButtons.forEach(button => {
    const heightInfo = document.querySelector('.services__info')
    heightInfo.computedStyleMap.height = heightInfo.scrollHeight + 'px'

    button.addEventListener('click', () => {
        const servicesCards = document.querySelectorAll('.services__card'),
              currentCard = button.parentNode,
              currentInfo = currentCard.querySelector('.services__info'),
              isCardopen = currentCard.classList.contains('services-open')

    servicesCards.forEach(card => {
        card.classList.replace('services-open', 'services-close')

        const info = card.querySelector('.services__info')
              info.computedStyleMap.height = '0'
    })

    if(!isCardopen){
        currentCard.classList.replace('services-close', 'services-open')
        currentInfo.computedStyleMap.height = currentInfo.scrollHeight + 'px'
    }
  })
})

// Testimonials of duplicate cards
// image
const tracks = document.querySelectorAll('.testimonials__content')

tracks.forEach(track => {
    const cards = [...track.children]

    for (const card of cards) {
        track.appendChild(card.cloneNode(true))
    }
})

// Copy email
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copyEmail).then(() => {
        copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

        setTimeout(() => {
            copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
        }, 2000)
    })
})

// Current year in footer
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear()

textYear.textContent = currentYear

// Scroll
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id,
              top = section.offsetTop - 50,
              height = section.offsetHeight,
              link = document.querySelector('.nav__menu a[href*=' + id + ']')

        if(!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
 })
}
window.addEventListener('scroll', scrollActive)

// Cursor
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0
let cursorX = 0, cursorY = 0

const cursorMove = () => {
    cursor.style.left = `${cursorX}px`
    cursor.style.top = `${mouseY}px`
    cursor.style.transform = `translate(-50%, -50%)`
    requestAnimationFrame(cursorMove)
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})

cursorMove()


const a = document.querySelectorAll('a')

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor')
    })
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hide-cursor')
    })
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true
})

sr.reveal(`.home__image, .projects__container, .work__container
          .testimonials__container, .contact__container`)
sr.reveal(`.home__data`,{delay: 900, origin: 'bottom'})
sr.reveal(`.home__info`,{delay: 1200, origin: 'bottom'})
sr.reveal(`.about__data`,{origin: 'left'})
sr.reveal(`.about__image`,{origin: 'right'})
sr.reveal(`.services__card`,{interval: 100})





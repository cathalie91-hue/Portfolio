const { animate, splitText, stagger } = anime

const { chars: chars1 } = splitText('.home__profession-1', {chars: True})
const { chars: chars2 } = splitText('.home__profession-2', {chars: True})

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})
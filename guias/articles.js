/* MasterDnD — Guías · Shared article data */
const ARTICLES = [
  {
    slug: 'como-jugar-dnd-principiantes',
    title: 'Cómo jugar D&D por primera vez',
    tag: '⭐ Principiante',
    color: 'linear-gradient(90deg,#7c3aed,#a855f7)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/1.png',
    time: '10 min'
  },
  {
    slug: 'clases-dnd-5e',
    title: 'Las 12 clases de D&D 5e explicadas',
    tag: '⚔️ Clases',
    color: 'linear-gradient(90deg,#e63946,#f97316)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/2.png',
    time: '12 min'
  },
  {
    slug: 'razas-dnd-5e',
    title: 'Todas las razas de D&D 5e: guía completa',
    tag: '🧝 Razas',
    color: 'linear-gradient(90deg,#059669,#34d399)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/3.png',
    time: '10 min'
  },
  {
    slug: 'crear-personaje-dnd',
    title: 'Cómo crear un personaje en D&D 5e paso a paso',
    tag: '✨ Tutorial',
    color: 'linear-gradient(90deg,#d4af37,#f8c662)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/4.png',
    time: '8 min'
  },
  {
    slug: 'alineamientos-dnd',
    title: 'Los 9 alineamientos de D&D explicados',
    tag: '⚖️ Rol',
    color: 'linear-gradient(90deg,#0891b2,#38bdf8)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/5.png',
    time: '7 min'
  },
  {
    slug: 'guia-dungeon-master-principiante',
    title: 'Guía del Dungeon Master principiante',
    tag: '🐉 Dungeon Master',
    color: 'linear-gradient(90deg,#c2410c,#fb923c)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/6.png',
    time: '12 min'
  },
  {
    slug: 'combate-dnd-5e',
    title: 'Combate en D&D 5e: guía completa del sistema de combate',
    tag: '⚔️ Combate',
    color: 'linear-gradient(90deg,#dc2626,#f97316)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/Combate.png',
    time: '10 min'
  },
  {
    slug: 'mejores-hechizos-dnd-5e',
    title: 'Los mejores hechizos de D&D 5e por nivel y clase',
    tag: '🔮 Hechizos',
    color: 'linear-gradient(90deg,#7c3aed,#a855f7)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/hechizos.png',
    time: '13 min'
  },
  {
    slug: 'trasfondos-dnd-5e',
    title: 'Trasfondos de D&D 5e: cuál elegir y por qué',
    tag: '📜 Trasfondo',
    color: 'linear-gradient(90deg,#b45309,#f59e0b)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/9.svg',
    time: '8 min'
  },
  {
    slug: 'condiciones-dnd-5e',
    title: 'Condiciones de D&D 5e: todas las condiciones explicadas',
    tag: '💀 Reglas',
    color: 'linear-gradient(90deg,#0d9488,#2dd4bf)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/10.svg',
    time: '7 min'
  },
  {
    slug: 'multiclase-dnd-5e',
    title: 'Multiclase en D&D 5e: cómo funciona y las mejores combinaciones',
    tag: '⚗️ Avanzado',
    color: 'linear-gradient(90deg,#4338ca,#818cf8)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/11.svg',
    time: '11 min'
  },
  {
    slug: 'mecanicas-basicas-dnd-5e',
    title: 'Mecánicas básicas de D&D 5e: tiradas, atributos y el d20',
    tag: '🎲 Mecánicas',
    color: 'linear-gradient(90deg,#1d4ed8,#60a5fa)',
    img: '/Im%C3%A1genes/Gu%C3%ADa/12.svg',
    time: '9 min'
  }
];

function renderRelated(excludeSlug, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const related = ARTICLES.filter(a => a.slug !== excludeSlug).slice(0, 3);
  el.innerHTML = related.map(a => `
    <a class="g-related-card" href="/guias/${a.slug}">
      <div class="g-related-card-top"><img src="${a.img}" alt="${a.title}" loading="lazy"/></div>
      <div class="g-related-card-body">
        <div class="g-related-card-tag">${a.tag}</div>
        <div class="g-related-card-title">${a.title}</div>
        <div class="g-related-card-time">${a.time} de lectura →</div>
      </div>
    </a>
  `).join('');
}

function initLikes(articleSlug) {
  const KEY_LIKED = 'mdnd_liked_' + articleSlug;
  const KEY_COUNT = 'mdnd_count_' + articleSlug;
  const BASE_COUNT = { 'como-jugar-dnd-principiantes': 24, 'clases-dnd-5e': 31, 'razas-dnd-5e': 18, 'crear-personaje-dnd': 22, 'alineamientos-dnd': 27, 'guia-dungeon-master-principiante': 15, 'combate-dnd-5e': 19, 'mejores-hechizos-dnd-5e': 23, 'trasfondos-dnd-5e': 14, 'condiciones-dnd-5e': 11, 'multiclase-dnd-5e': 17, 'mecanicas-basicas-dnd-5e': 16 };

  let liked = localStorage.getItem(KEY_LIKED) === '1';
  let count = parseInt(localStorage.getItem(KEY_COUNT) || (BASE_COUNT[articleSlug] || 10));

  function updateUI() {
    document.querySelectorAll('.g-like-icon').forEach(el => el.textContent = liked ? '♥' : '♡');
    document.querySelectorAll('.g-like-count').forEach(el => el.textContent = count);
    document.querySelectorAll('.g-like-btn').forEach(el => el.classList.toggle('liked', liked));
  }

  window.toggleLike = function() {
    liked = !liked;
    count = liked ? count + 1 : Math.max(0, count - 1);
    localStorage.setItem(KEY_LIKED, liked ? '1' : '0');
    localStorage.setItem(KEY_COUNT, count);
    updateUI();
    // Pulse animation
    document.querySelectorAll('.g-like-btn').forEach(el => {
      el.classList.add('pulse');
      setTimeout(() => el.classList.remove('pulse'), 400);
    });
  };

  updateUI();
}

function initProgress() {
  const bar = document.getElementById('g-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const body = document.body, html = document.documentElement;
    const total = Math.max(body.scrollHeight, html.scrollHeight) - window.innerHeight;
    bar.style.width = Math.min(100, (window.scrollY / total) * 100) + '%';
  }, { passive: true });
}

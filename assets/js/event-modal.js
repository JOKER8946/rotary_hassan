/* =====================================================================
   EVENT DETAIL POPUP
   ---------------------------------------------------------------------
   Drives the #workModal dialog from the EVENTS data in site-data.js.
   Requires site-data.js to be loaded first.

   Usage:
     EventModal.init();              // wire the dialog controls
     EventModal.bindCards(document); // wire every [data-work-id] card
   ===================================================================== */

const EventModal = (function () {
  let backdrop, closeBtn, titleEl, tagEl, dateEl, descEl, outcomesEl, partnerEl;
  let featuredTitle, featuredDesc, featuredWrap, featuredImage, thumbsGrid;
  let activePhotos = [];

  function cacheNodes() {
    backdrop = document.getElementById('workModal');
    closeBtn = document.getElementById('modalCloseBtn');
    titleEl = document.getElementById('modalTitle');
    tagEl = document.getElementById('modalTag');
    dateEl = document.getElementById('modalDate');
    descEl = document.getElementById('modalDescription');
    outcomesEl = document.getElementById('modalOutcomes');
    partnerEl = document.getElementById('modalPartner');
    featuredTitle = document.getElementById('featuredTitle');
    featuredDesc = document.getElementById('featuredDesc');
    featuredWrap = document.getElementById('mainFeaturedPhoto');
    featuredImage = document.getElementById('featuredImage');
    thumbsGrid = document.getElementById('modalThumbsGrid');
  }

  function setFeaturedPhoto(photo) {
    featuredTitle.textContent = photo.title;
    featuredDesc.textContent = photo.desc;

    if (photo.src) {
      featuredImage.src = photo.src;
      featuredImage.alt = photo.title;
      featuredWrap.classList.add('has-photo');
    } else {
      featuredImage.removeAttribute('src');
      featuredImage.alt = '';
      featuredWrap.classList.remove('has-photo');
    }
  }

  function open(id) {
    const data = EVENTS[id];
    if (!data || !backdrop) return;

    titleEl.textContent = data.title;
    tagEl.textContent = data.tag;
    dateEl.textContent = data.date;
    descEl.textContent = data.description;

    outcomesEl.innerHTML = data.outcomes.map(item => `
      <li>
        <span style="color:var(--rotary-gold-dark); font-weight:bold;">✓</span>
        <span>${item}</span>
      </li>
    `).join('');

    partnerEl.innerHTML = `<strong>Collaborative Partner:</strong> ${data.partner}`;

    activePhotos = data.photos || [];
    if (activePhotos.length > 0) {
      setFeaturedPhoto(activePhotos[0]);
      thumbsGrid.innerHTML = activePhotos.map((photo, idx) => `
        <div class="thumb-block ${photo.src ? 'has-photo' : ''} ${idx === 0 ? 'active' : ''}" data-idx="${idx}" title="${photo.title}">
          ${photo.src ? `<img src="${photo.src}" alt="${photo.title}">` : photo.title}
        </div>
      `).join('');
    } else {
      thumbsGrid.innerHTML = '';
    }

    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!backdrop) return;
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function init() {
    cacheNodes();
    if (!backdrop) return;

    closeBtn.addEventListener('click', close);

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });

    /* Thumbnails are re-rendered per event, so listen on the grid itself. */
    thumbsGrid.addEventListener('click', (e) => {
      const thumb = e.target.closest('.thumb-block');
      if (!thumb) return;
      const idx = parseInt(thumb.dataset.idx, 10);
      if (!activePhotos[idx]) return;
      thumbsGrid.querySelectorAll('.thumb-block').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      setFeaturedPhoto(activePhotos[idx]);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) close();
    });
  }

  /* Wire click + Enter/Space on every event card inside `root`. */
  function bindCards(root) {
    (root || document).querySelectorAll('[data-work-id]').forEach(card => {
      card.addEventListener('click', () => open(card.dataset.workId));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open(card.dataset.workId);
        }
      });
    });
  }

  return { init, open, close, bindCards };
})();

const search = document.getElementById('search');
const cards = [...document.querySelectorAll('.card')];
const noResults = document.getElementById('noResults');

search.addEventListener('input', () => {
  const query = search.value.toLowerCase().trim();
  let visible = 0;
  cards.forEach(card => {
    const text = card.dataset.search.toLowerCase();
    const show = !query || text.includes(query);
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  noResults.classList.toggle('hidden', visible !== 0);
});

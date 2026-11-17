// Exercise 9.2 – Changing Content, Attributes and Styles
const t = $id('ten'), g = $id('gia'), l = $id('lien'), b = $id('badge'), card = $id('sp');
const info = m => { $id('info').textContent = m; };
let big = false;
$id('acts').addEventListener('click', e => {
  const act = e.target.dataset.act;
  if (!act) return;
  switch (act) {
    case 'text':
      t.textContent = t.textContent.includes('Animo') ? 'Tã quần Takato size L' : 'Tã quần Animo size L';
      info('textContent → ' + t.textContent); break;
    case 'html':
      g.innerHTML = 'Giá: <strong>175.000 đ</strong> <s>189.000 đ</s>';
      info('innerHTML → ' + g.innerHTML); break;
    case 'attr':
      l.setAttribute('href', '#chi-tiet');
      l.setAttribute('title', 'Đã đổi bằng setAttribute');
      info(`href = ${l.getAttribute('href')}\ntitle = ${l.getAttribute('title')}`); break;
    case 'badge':
      b.classList.toggle('sale');
      b.textContent = b.classList.contains('sale') ? 'Giảm 10%' : 'Mới';
      info('classList.toggle("sale") → class = "' + b.className + '"'); break;
    case 'style':
      big = !big;
      card.style.backgroundColor = big ? '#fff4cc' : '';
      card.style.fontSize = big ? '1.2rem' : '';
      info(`style.backgroundColor = "${card.style.backgroundColor}"\nstyle.fontSize = "${card.style.fontSize}"`); break;
    case 'hide':
      g.style.display = g.style.display === 'none' ? '' : 'none';
      info('style.display = "' + g.style.display + '"'); break;
    case 'reset': location.reload();
  }
});

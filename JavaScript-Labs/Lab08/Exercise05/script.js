// Exercise 8.5 – Working with Strings
function slugify(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function analyze() {
  const raw = $id('s').value, s = raw.trim();
  const data = [
    ['length', raw.length], ['trim()', '"' + s + '"'], ['toUpperCase()', s.toUpperCase()],
    ['toLowerCase()', s.toLowerCase()], ['includes("Animo")', s.includes('Animo')],
    ['indexOf("size")', s.indexOf('size')], ['slice(0, 12)', '"' + s.slice(0, 12) + '"'],
    ['replace("Animo", "Takato")', s.replace('Animo', 'Takato')], ['split(" ")', JSON.stringify(s.split(' '))],
    ['charAt(0)', s.charAt(0)], ['startsWith("Tã")', s.startsWith('Tã')],
    ['Template literal', `Sản phẩm: ${s} (${s.length} ký tự)`]
  ];
  $id('rows').innerHTML = data.map(([k, v]) => `<tr><td><code>${escapeHtml(k)}</code></td><td>${escapeHtml(String(v))}</td></tr>`).join('');
  $id('slug').textContent = 'Slug: ' + slugify(s);
}
$id('go').addEventListener('click', analyze);
analyze();

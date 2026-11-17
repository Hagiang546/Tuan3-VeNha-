// Exercise 9.1 – Selecting HTML Elements
const methods = [
  ['getElementById("tieude")', () => document.getElementById('tieude')],
  ['getElementsByClassName("sp")', () => document.getElementsByClassName('sp')],
  ['getElementsByTagName("li")', () => document.getElementsByTagName('li')],
  ['querySelector(".hot")', () => document.querySelector('.hot')],
  ['querySelectorAll("#ds .gia")', () => document.querySelectorAll('#ds .gia')],
  ['querySelectorAll("#ds li:nth-child(odd)")', () => document.querySelectorAll('#ds li:nth-child(odd)')]
];
function clear() { document.querySelectorAll('.hl').forEach(el => el.classList.remove('hl')); }
methods.forEach(([label, fn]) => {
  const b = document.createElement('button');
  b.textContent = label;
  b.className = 'alt';
  b.onclick = () => {
    clear();
    const r = fn();
    const list = r instanceof Element ? [r] : Array.from(r);
    list.forEach(el => el.classList.add('hl'));
    $id('info').textContent = `${label}\n→ ${list.length} phần tử\n→ ${list.map(el => el.textContent.trim()).join(' | ')}`;
  };
  $id('btns').appendChild(b);
});
$id('info').textContent = 'Bấm một phương thức để tô sáng các phần tử được chọn.';

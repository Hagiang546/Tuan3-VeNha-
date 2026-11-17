// Exercise 8.4 – Functions and Control Structures
function phiVanChuyen(tong, khuVuc) {
  if (tong >= 500000) { return 0; }
  switch (khuVuc) {
    case 'hcm': return 15000;
    case 'mien-nam': return 25000;
    default: return 35000;
  }
}
const thanhTien = (gia, sl, giam = 0) => gia * sl * (1 - giam / 100);

$id('f1').addEventListener('submit', e => {
  e.preventDefault();
  const phi = phiVanChuyen(Number($id('tong').value), $id('kv').value);
  $id('r1').textContent = phi === 0 ? 'Miễn phí vận chuyển (đơn từ 500.000 đ).' : 'Phí vận chuyển: ' + vnd(phi);
});

const n = () => Math.max(1, Math.min(100, parseInt($id('n').value, 10) || 1));
$id('b-sum').onclick = () => {
  let s = 0;
  for (let i = 1; i <= n(); i++) s += i;
  $id('r2').textContent = `1 + 2 + ... + ${n()} = ${s}`;
};
$id('b-table').onclick = () => {
  let i = 1, t = '';
  while (i <= 10) { t += `${n()} x ${i} = ${n() * i}\n`; i++; }
  $id('r2').textContent = t;
};
$id('b-fb').onclick = () => {
  const out = [];
  for (let i = 1; i <= n(); i++) out.push(i % 15 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i);
  $id('r2').textContent = out.join(', ');
};
$id('r3').textContent = [
  `thanhTien(189000, 2)     = ${vnd(thanhTien(189000, 2))}`,
  `thanhTien(189000, 2, 10) = ${vnd(thanhTien(189000, 2, 10))}`
].join('\n');

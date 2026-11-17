// Exercise 8.3 – Variables, Data Types and Operators
const VAT = 0.08;
let hienTai = 5;
const samples = [
  ['Chuỗi (string)', 'Tã quần Animo'], ['Số nguyên (number)', 189000], ['Số thập phân (number)', 0.08],
  ['Logic (boolean)', true], ['Rỗng (null)', null], ['Chưa gán (undefined)', undefined],
  ['Mảng (array)', ['S', 'M', 'L']], ['Đối tượng (object)', { ma: 'SP01' }], ['Hàm (function)', function () {}],
  ['Không phải số (NaN)', NaN], ['BigInt', 12345678901234567890n], ['Symbol', Symbol('id')]
];
function show(v) {
  if (Array.isArray(v)) return '[' + v.join(', ') + ']';
  if (v && typeof v === 'object') return JSON.stringify(v);
  return String(v);
}
$id('types').innerHTML = samples.map(([l, v]) =>
  `<tr><td>${l}</td><td><code>${escapeHtml(show(v))}</code></td><td><code>${typeof v}</code></td></tr>`).join('');

$id('ops').textContent = [
  `let hienTai = 5; ++hienTai → ${++hienTai}`,
  `const VAT = ${VAT} (không thể gán lại)`,
  `10 % 3 = ${10 % 3}`,
  `2 ** 5 = ${2 ** 5}`,
  `"5" + 3 = ${"5" + 3}   (nối chuỗi)`,
  `"5" - 3 = ${"5" - 3}   (ép sang số)`,
  `"5" == 5  → ${"5" == 5}`,
  `"5" === 5 → ${"5" === 5}`,
  `0.1 + 0.2 = ${0.1 + 0.2}`
].join('\n');

$id('f').addEventListener('submit', e => {
  e.preventDefault();
  const gia = Number($id('price').value), sl = parseInt($id('qty').value, 10), gg = Number($id('disc').value);
  const r = $id('result');
  if ([gia, sl, gg].some(Number.isNaN)) { r.textContent = 'Vui lòng nhập số hợp lệ.'; return; }
  const tam = gia * sl, giam = tam * gg / 100, vat = (tam - giam) * VAT;
  r.textContent = `Tạm tính:  ${vnd(tam)}\nGiảm giá:  -${vnd(giam)}\nVAT 8%:    ${vnd(vat)}\nThành tiền: ${vnd(tam - giam + vat)}`;
});

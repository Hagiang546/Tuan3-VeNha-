// Exercise 8.2 – Embedding JavaScript (inline, internal, external)
function chaoMung(ten) {
  return 'Xin chào ' + ten + ', đây là hàm nằm trong file script.js';
}
$id('btn-ext').addEventListener('click', () => {
  const t = chaoMung('bạn');
  $id('external-out').textContent = t;
  console.log(t);
});
console.log('script.js đã được nạp');

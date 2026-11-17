// Exercise 9.3 – Creating, Adding and Removing Elements
const cart = $id('cart');
function taoItem(ten, gia) {
  const li = document.createElement('li');
  li.dataset.gia = gia;
  const s = document.createElement('span');
  s.textContent = `${ten} – ${vnd(gia)}`;
  const x = document.createElement('button');
  x.textContent = 'Xóa'; x.className = 'alt'; x.dataset.act = 'remove';
  li.append(s, x);
  return li;
}
function capNhat() {
  const items = cart.querySelectorAll('li');
  let tong = 0;
  items.forEach(li => { tong += Number(li.dataset.gia); });
  $id('total').textContent = 'Tổng: ' + vnd(tong);
  $id('empty').hidden = items.length > 0;
}
function docForm() {
  const ten = $id('ten').value.trim(), g = $id('gia').value;
  if (!ten || g === '' || Number(g) < 0) { alert('Hãy nhập tên sản phẩm và giá hợp lệ.'); return null; }
  return taoItem(ten, Number(g));
}
$id('f').addEventListener('submit', e => {
  e.preventDefault();
  const li = docForm();
  if (li) { cart.appendChild(li); e.target.reset(); capNhat(); }
});
$id('btn-top').onclick = () => {
  const li = docForm();
  if (li) { cart.insertBefore(li, cart.firstChild); $id('f').reset(); capNhat(); }
};
$id('btn-clear').onclick = () => {
  while (cart.firstChild) { cart.removeChild(cart.firstChild); }
  capNhat();
};
cart.addEventListener('click', e => {
  if (e.target.dataset.act === 'remove') { e.target.closest('li').remove(); capNhat(); }
});
cart.append(taoItem('Tã quần Animo size L', 189000), taoItem('Khăn ướt Pigeon', 45000));
capNhat();

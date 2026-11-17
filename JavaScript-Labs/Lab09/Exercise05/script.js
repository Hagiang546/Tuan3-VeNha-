// Exercise 9.5 – Forms and Input Validation
const rules = {
  ho: v => v.trim().split(/\s+/).length >= 2 ? '' : 'Nhập đầy đủ họ và tên (ít nhất 2 từ).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Email chưa đúng định dạng, ví dụ ten@gmail.com.',
  sdt: v => /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(v.replace(/\s/g, '')) ? '' : 'Số điện thoại gồm 10 số, bắt đầu bằng 03/05/07/08/09.',
  mk: v => /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(v) ? '' : 'Mật khẩu tối thiểu 8 ký tự, gồm cả chữ và số.',
  mk2: v => v !== '' && v === $id('mk').value ? '' : 'Mật khẩu nhập lại không khớp.'
};
function kiemTra(id) {
  const el = $id(id), msg = rules[id](el.value);
  $id('e-' + id).textContent = msg;
  el.classList.toggle('invalid', !!msg);
  return !msg;
}
Object.keys(rules).forEach(id => {
  $id(id).addEventListener('blur', () => kiemTra(id));
  $id(id).addEventListener('input', () => { if ($id(id).classList.contains('invalid')) kiemTra(id); });
});
$id('reg').addEventListener('submit', e => {
  e.preventDefault();
  const results = Object.keys(rules).map(id => kiemTra(id));
  const dk = $id('dk').checked;
  $id('e-dk').textContent = dk ? '' : 'Bạn cần đồng ý với điều khoản.';
  const ok = results.every(Boolean) && dk;
  const box = $id('ok');
  box.hidden = !ok;
  if (ok) { box.textContent = `Đăng ký thành công! Xin chào ${$id('ho').value.trim()}.`; }
  else { const first = document.querySelector('.invalid'); if (first) first.focus(); }
});
$id('reg').addEventListener('reset', () => {
  document.querySelectorAll('.err').forEach(s => { s.textContent = ''; });
  document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  $id('ok').hidden = true;
});

// Exercise 8.6 – Working with Dates
const thu = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
const two = n => String(n).padStart(2, '0');
const fmt = d => `${thu[d.getDay()]}, ${two(d.getDate())}/${two(d.getMonth() + 1)}/${d.getFullYear()}`;
function tick() {
  const n = new Date();
  $id('clock').textContent = `${fmt(n)} – ${two(n.getHours())}:${two(n.getMinutes())}:${two(n.getSeconds())}`;
}
tick();
setInterval(tick, 1000);

$id('b1').onclick = () => {
  const d = new Date();
  d.setDate(d.getDate() + Number($id('days').value || 0));
  $id('r1').textContent = 'Dự kiến giao: ' + fmt(d);
};
$id('b2').onclick = () => {
  const v = $id('sale').value;
  if (!v) { $id('r2').textContent = 'Hãy chọn một ngày.'; return; }
  const target = new Date(v + 'T00:00:00');
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const c = Math.round((target - today) / 86400000);
  $id('r2').textContent = c > 0 ? `Còn ${c} ngày (${fmt(target)})`
    : c === 0 ? 'Khuyến mãi bắt đầu hôm nay!' : `Đã qua ${-c} ngày (${fmt(target)})`;
};

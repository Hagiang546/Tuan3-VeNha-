// Exercise 8.7 – Working with Arrays
const goc = [
  { ten: 'Tã quần Animo size L', gia: 189000 }, { ten: 'Tã quần Takato size L', gia: 175000 },
  { ten: 'Tã dán Bobby size M', gia: 210000 }, { ten: 'Khăn ướt Pigeon', gia: 45000 },
  { ten: 'Sữa tắm Johnson', gia: 98000 }
];
let ds = goc.map(p => ({ ...p }));
let dem = 0;
function render(list, msg) {
  $id('rows').innerHTML = list.map((p, i) => `<tr><td>${i + 1}</td><td>${escapeHtml(p.ten)}</td><td>${vnd(p.gia)}</td></tr>`).join('');
  $id('info').textContent = msg || `Mảng có ${list.length} phần tử.`;
}
$id('main-card').addEventListener('click', e => {
  const act = e.target.dataset.act;
  if (!act) return;
  switch (act) {
    case 'push': dem++; ds.push({ ten: 'Sản phẩm mới ' + dem, gia: 50000 * dem }); render(ds, 'push(): thêm vào cuối mảng.'); break;
    case 'pop': ds.pop(); render(ds, 'pop(): bỏ phần tử cuối.'); break;
    case 'unshift': dem++; ds.unshift({ ten: 'Khuyến mãi ' + dem, gia: 9000 * dem }); render(ds, 'unshift(): thêm vào đầu mảng.'); break;
    case 'shift': ds.shift(); render(ds, 'shift(): bỏ phần tử đầu.'); break;
    case 'sort': ds.sort((a, b) => a.gia - b.gia); render(ds, 'sort((a, b) => a.gia - b.gia): giá tăng dần.'); break;
    case 'filter': render(ds.filter(p => p.gia < 200000), 'filter(): chỉ lọc để hiển thị, mảng gốc không đổi.'); break;
    case 'map': render(ds.map(p => ({ ...p, gia: p.gia * 0.9 })), 'map(): tạo mảng mới giá giảm 10%, mảng gốc không đổi.'); break;
    case 'reduce': render(ds, 'reduce(): tổng giá = ' + vnd(ds.reduce((s, p) => s + p.gia, 0))); break;
    case 'find': {
      const p = ds.find(x => x.ten.includes('Takato'));
      render(ds, p ? `find(): ${p.ten} – ${vnd(p.gia)}` : 'find(): không tìm thấy.');
      break;
    }
    default: ds = goc.map(p => ({ ...p })); dem = 0; render(ds);
  }
});
render(ds);

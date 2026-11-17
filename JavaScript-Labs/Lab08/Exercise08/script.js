// Exercise 8.8 – Working with Objects
const sp = {
  ma: 'SP01', ten: 'Tã quần Animo size L', gia: 189000, tonKho: 25,
  moTa() { return `${this.ten} – ${vnd(this.gia)}`; },
  giamGia(pt) { this.gia = Math.round(this.gia * (1 - pt / 100)); return this; }
};
const gio = {
  items: [],
  them(p, sl = 1) {
    const t = this.items.find(i => i.ma === p.ma);
    if (t) { t.sl += sl; } else { this.items.push({ ma: p.ma, ten: p.ten, gia: p.gia, sl }); }
    return this;
  },
  tong() { return this.items.reduce((s, i) => s + i.gia * i.sl, 0); }
};
const out = t => { $id('out').textContent = t; };
out('Bấm một nút để xem kết quả.');
$id('main-card').addEventListener('click', e => {
  const act = e.target.dataset.act;
  if (!act) return;
  switch (act) {
    case 'json': out(JSON.stringify(sp, null, 2) + '\n\n// Lưu ý: JSON.stringify bỏ qua các phương thức (hàm).'); break;
    case 'keys':
      out('Object.keys: ' + Object.keys(sp).join(', ') + '\n\n' +
        Object.entries(sp).filter(([, v]) => typeof v !== 'function').map(([k, v]) => `${k} = ${v}`).join('\n'));
      break;
    case 'method': out(sp.moTa() + '\n"tonKho" in sp → ' + ('tonKho' in sp) + '\nsp.hasOwnProperty("mau") → ' + sp.hasOwnProperty('mau')); break;
    case 'discount': sp.giamGia(10); out('Sau khi giảm 10%: ' + sp.moTa()); break;
    case 'destruct': {
      const { ten, gia } = sp;
      const banSao = { ...sp, tonKho: 10, mau: 'Xanh' };
      out(`Destructuring: ten = "${ten}", gia = ${gia}\nSpread: tonKho gốc = ${sp.tonKho}, bản sao = ${banSao.tonKho}, mau = ${banSao.mau}`);
      break;
    }
    case 'cart': gio.them(sp); out('Giỏ hàng:\n' + JSON.stringify(gio.items, null, 2) + '\nTổng: ' + vnd(gio.tong())); break;
  }
});

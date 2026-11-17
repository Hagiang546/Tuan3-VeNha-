// Trang chủ JavaScript-Labs: giỏ hàng thử nghiệm + năm hiện tại
(function () {
  const GIA = 189000, MIEN_PHI = 500000;
  const vnd = n => n.toLocaleString('vi-VN') + ' đ';
  const qtyEl = document.getElementById('qty');
  if (qtyEl) {
    let sl = 1;
    const ve = () => {
      const tong = GIA * sl;
      qtyEl.textContent = sl;
      document.getElementById('unit-price').textContent = vnd(GIA) + ' / gói';
      document.getElementById('total').textContent = vnd(tong);
      document.getElementById('ship').textContent = tong >= MIEN_PHI
        ? 'Đơn hàng được miễn phí vận chuyển.'
        : 'Mua thêm ' + vnd(MIEN_PHI - tong) + ' để được miễn phí vận chuyển.';
      document.getElementById('minus').disabled = sl <= 1;
      document.getElementById('plus').disabled = sl >= 20;
    };
    document.getElementById('minus').addEventListener('click', () => { if (sl > 1) { sl--; ve(); } });
    document.getElementById('plus').addEventListener('click', () => { if (sl < 20) { sl++; ve(); } });
    ve();
  }
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

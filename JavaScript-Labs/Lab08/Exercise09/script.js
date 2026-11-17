// Exercise 8.9 – Browser Console and Debugging
const panel = $id('panel');
function ghi(loai, msg) {
  console[loai](msg);
  const li = document.createElement('li');
  li.className = 'log-' + loai;
  li.textContent = `[${loai}] ${msg}`;
  panel.prepend(li);
}
$id('main-card').addEventListener('click', e => {
  const act = e.target.dataset.act;
  if (!act) return;
  switch (act) {
    case 'log':
      ghi('log', 'Thông báo thường');
      ghi('info', 'Thông tin');
      ghi('warn', 'Cảnh báo: tồn kho sắp hết');
      ghi('error', 'Lỗi: không tìm thấy sản phẩm');
      break;
    case 'table':
      console.table([
        { ma: 'SP01', ten: 'Tã quần Animo', gia: 189000 },
        { ma: 'SP02', ten: 'Tã quần Takato', gia: 175000 }
      ]);
      ghi('log', 'Đã in bảng ra Console.');
      break;
    case 'group':
      console.group('Đơn hàng #1001');
      console.log('Sản phẩm: Tã quần Animo x 2');
      console.log('Tổng tiền: 378.000 đ');
      console.groupEnd();
      ghi('log', 'Đã in nhóm "Đơn hàng #1001" ra Console.');
      break;
    case 'time': {
      console.time('vong-lap');
      let s = 0;
      for (let i = 0; i < 1e6; i++) s += i;
      console.timeEnd('vong-lap');
      ghi('log', 'Tổng = ' + s + ' (xem thời gian chạy trong Console).');
      break;
    }
    case 'try':
      try { JSON.parse('{ten: Animo}'); }
      catch (err) { ghi('error', `${err.name}: ${err.message}`); }
      break;
    case 'debugger':
      ghi('log', 'Gặp lệnh debugger: nếu DevTools đang mở, trình duyệt sẽ tạm dừng tại đây.');
      debugger;
      break;
  }
});

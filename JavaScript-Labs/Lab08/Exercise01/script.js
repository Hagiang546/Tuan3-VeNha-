// Exercise 8.1 – Enabling/Disabling JavaScript
const s = $id('status');
s.textContent = 'JavaScript đang BẬT';
s.className = 'status status-on';
$id('time').textContent = 'Mã chạy lúc ' + new Date().toLocaleTimeString('vi-VN');
console.log('Exercise 8.1: JavaScript đang chạy');

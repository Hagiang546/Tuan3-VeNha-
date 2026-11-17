// Hàm dùng chung cho các Exercise
const $id = id => document.getElementById(id);
const vnd = n => Math.round(n).toLocaleString('vi-VN') + ' đ';
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

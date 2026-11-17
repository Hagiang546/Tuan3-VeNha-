// Exercise 9.4 – Simple Event Handling
const box = $id('box');
let dem = 0;
function ghi(m) {
  const log = $id('log'), li = document.createElement('li');
  li.textContent = new Date().toLocaleTimeString('vi-VN') + ' – ' + m;
  log.prepend(li);
  while (log.children.length > 8) log.lastChild.remove();
}
function vao() { box.style.background = '#1e7b3a'; box.textContent = 'mouseover: chuột đang ở trên hộp'; ghi('mouseover'); }
function ra() { box.style.background = ''; box.textContent = 'mouseout: chuột đã rời hộp'; ghi('mouseout'); }
box.onclick = () => { dem++; $id('count').textContent = dem; ghi('click lần ' + dem); };
box.addEventListener('dblclick', () => { box.style.background = '#b3261e'; ghi('dblclick'); });
box.addEventListener('mouseover', vao);
box.addEventListener('mouseout', ra);
$id('off').onclick = () => { box.removeEventListener('mouseover', vao); box.removeEventListener('mouseout', ra); ghi('Đã gỡ mouseover/mouseout'); };
$id('on').onclick = () => { box.addEventListener('mouseover', vao); box.addEventListener('mouseout', ra); ghi('Đã gắn lại mouseover/mouseout'); };

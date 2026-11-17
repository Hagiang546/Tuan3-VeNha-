// Exercise 9.6 – Event Debugging
const els = ['outer', 'middle', 'inner'].map($id);
function ghi(m) {
  const li = document.createElement('li');
  li.textContent = m;
  $id('log').prepend(li);
}
function h(e) {
  ghi(`${e.currentTarget.id} (target: ${e.target.id}, pha: ${['', 'capture', 'target', 'bubble'][e.eventPhase]})`);
  if ($id('stop').checked && e.currentTarget.id === 'middle') { e.stopPropagation(); ghi('→ stopPropagation() tại middle'); }
}
function bind() {
  els.forEach(el => {
    el.removeEventListener('click', h, true);
    el.removeEventListener('click', h, false);
    el.addEventListener('click', h, $id('cap').checked);
  });
}
$id('cap').addEventListener('change', () => { bind(); ghi('--- đã gắn lại: capture = ' + $id('cap').checked + ' ---'); });
bind();
$id('clr').onclick = () => { $id('log').innerHTML = ''; };
$id('kb').addEventListener('keydown', e => { $id('ev').textContent = `keydown\nkey: "${e.key}"\ncode: ${e.code}\nctrlKey: ${e.ctrlKey}`; });
$id('pad').addEventListener('mousemove', e => {
  $id('ev').textContent = `mousemove\nclientX: ${e.clientX}, clientY: ${e.clientY}\noffsetX: ${e.offsetX}, offsetY: ${e.offsetY}\ntarget: ${e.target.id}`;
});

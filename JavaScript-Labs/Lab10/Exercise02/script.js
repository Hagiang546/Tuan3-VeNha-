// Exercise 10.2 – jQuery Selectors
const sels = ['#ds li', 'li.sp', '.hot', 'ul > li', 'li:first', 'li:last', 'li:even', 'li:odd',
  'li:contains("Tã")', 'li:not(.hot)', 'input[type="text"]', 'a[href^="https"]'];
$.each(sels, function (i, s) {
  $('<button class="alt">').text(s).attr('data-sel', s).appendTo('#btns');
});
$('#btns').on('click', 'button', function () {
  const s = $(this).attr('data-sel');
  $('.hl').removeClass('hl');
  const $r = $(s).addClass('hl');
  $('#info').text('$(\'' + s + '\')  →  .length = ' + $r.length + '\n' +
    $r.map(function () { return $.trim($(this).text()) || this.tagName.toLowerCase(); }).get().join(' | '));
});

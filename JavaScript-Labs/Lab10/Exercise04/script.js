// Exercise 10.4 – Adding and Manipulating DOM Elements
$(function () {
  const goc = ['Tã quần Animo', 'Tã quần Takato'];
  let n = 0;
  function reset() {
    $('#cart').empty();
    $.each(goc, function (i, t) { $('<li>').text(t).appendTo('#cart'); });
    n = 0;
  }
  reset();
  $('[data-act]').on('click', function () {
    const act = $(this).data('act'), item = () => '<li>Mục thêm #' + (++n) + ' (' + act + ')</li>';
    switch (act) {
      case 'append': $('#cart').append(item()); break;
      case 'prepend': $('#cart').prepend(item()); break;
      case 'before': $('#cart li:first').before(item()); break;
      case 'after': $('#cart li:last').after(item()); break;
      case 'clone': $('#cart li:last').clone().append(' (bản sao)').appendTo('#cart'); break;
      case 'html': {
        const $f = $('#cart li:first');
        $f.html('<strong>' + $f.text() + '</strong>');
        $('#info').text('html() = ' + $f.html() + '\ntext() = ' + $f.text());
        return;
      }
      case 'remove': $('#cart li:last').remove(); break;
      case 'empty': $('#cart').empty(); break;
      default: reset();
    }
    $('#info').text(act + '() → giỏ hàng hiện có ' + $('#cart li').length + ' mục.');
  });
});

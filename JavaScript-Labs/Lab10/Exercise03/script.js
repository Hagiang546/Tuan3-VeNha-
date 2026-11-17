// Exercise 10.3 – jQuery Events
$(function () {
  const info = m => $('#info').text(m);
  $('#q').on('keyup input', function () {
    const k = $(this).val().toLowerCase();
    $('#ds li').each(function () { $(this).toggle($(this).text().toLowerCase().indexOf(k) > -1); });
    $('#found').text('Hiển thị ' + $('#ds li:visible').length + ' sản phẩm');
  }).trigger('keyup');
  $('#ds').on('click', 'li', function () {
    $(this).toggleClass('sel');
    info('click: ' + $(this).text() + ' – ' + ($(this).hasClass('sel') ? 'đã chọn' : 'bỏ chọn'));
  });
  $('#ds').on('mouseenter.hv', 'li', function () { $(this).addClass('hover'); })
          .on('mouseleave.hv', 'li', function () { $(this).removeClass('hover'); });
  let n = 0;
  $('#add').on('click', function () {
    n++;
    $('<li>').text('Sản phẩm mới ' + n).appendTo('#ds');
    info('Mục mới vẫn nhận click/hover nhờ uỷ quyền sự kiện (event delegation).');
  });
  $('#once').one('click', function () { info('one(): sự kiện này chỉ chạy một lần.'); $(this).prop('disabled', true); });
  $('#offBtn').on('click', function () {
    $('#ds').off('.hv');
    $('#ds li').removeClass('hover');
    info('off(".hv"): đã tắt hiệu ứng hover.');
  });
});

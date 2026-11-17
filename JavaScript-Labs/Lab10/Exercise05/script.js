// Exercise 10.5 – jQuery Effects (show/hide, fade, slide)
$(function () {
  $('[data-fx]').on('click', function () {
    const fx = $(this).data('fx');
    let sp = $('#speed').val();
    if (!isNaN(sp)) sp = Number(sp);
    const t0 = Date.now();
    const done = function () { $('#info').text(fx + '() hoàn tất sau ' + (Date.now() - t0) + ' ms – hàm callback đã chạy.'); };
    if (fx === 'fadeTo') { $('#fx').fadeTo(sp, 0.4, done); } else { $('#fx')[fx](sp, done); }
  });
  $('.faq .q').on('click keydown', function (e) {
    if (e.type === 'keydown' && e.key !== 'Enter') return;
    $(this).next('.a').slideToggle(250);
  });
});

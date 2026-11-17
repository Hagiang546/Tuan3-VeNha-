// Exercise 10.6 – Simple jQuery Animation
$(function () {
  const info = m => $('#info').text(m);
  const max = () => $('#stage').width() - $('#ball').outerWidth() - 10;
  $('[data-a]').on('click', function () {
    const a = $(this).data('a'), $b = $('#ball');
    switch (a) {
      case 'right': $b.stop(true).animate({ left: max() }, 800); info('animate({ left: ' + Math.round(max()) + ' }, 800)'); break;
      case 'grow': $b.stop(true).animate({ width: '+=30px', height: '+=30px', top: '-=15px' }, 400); info('animate({ width: "+=30px", height: "+=30px" }, 400)'); break;
      case 'fade': $b.stop(true).animate({ opacity: 0.2 }, 600).animate({ opacity: 1 }, 600); info('Hai lệnh animate() nối tiếp nhau → hàng đợi (queue).'); break;
      case 'chain':
        $b.stop(true).animate({ left: max() }, 600).delay(300).animate({ top: 100 }, 300).animate({ left: 10 }, 600).animate({ top: 50 }, 300);
        info('Chuỗi: sang phải → chờ 300 ms → xuống → sang trái → lên.'); break;
      case 'stop': $b.stop(true); info('stop(true): dừng hiệu ứng ngay lập tức.'); break;
      default: $b.stop(true).css({ left: 10, top: 50, width: 60, height: 60, opacity: 1 }); info('Đã đặt lại quả bóng.');
    }
  });
  let n = 0;
  $('#addCart').on('click', function () {
    n++;
    $('#cartBadge').text(n).stop(true, true).css('font-size', '16px')
      .animate({ fontSize: '28px' }, 150).animate({ fontSize: '16px' }, 150);
  });
});

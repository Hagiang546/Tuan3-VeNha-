// Exercise 10.1 – Installing and Using jQuery
if (typeof jQuery === 'undefined') {
  $id('ver').textContent = 'jQuery chưa được nạp! Kiểm tra kết nối mạng hoặc đường dẫn CDN.';
} else {
  $('#ver').text('jQuery đã nạp – phiên bản ' + $.fn.jquery);
  $(document).ready(function () {
    $('#ready').text('$(document).ready chạy lúc ' + new Date().toLocaleTimeString('vi-VN'));
  });
  $('#btn').on('click', function () {
    $('#hello').text('Nội dung này đã được thay bằng $("#hello").text().').css('color', '#0f6e6e');
  });
}

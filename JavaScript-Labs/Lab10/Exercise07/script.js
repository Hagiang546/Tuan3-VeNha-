// Exercise 10.7 – GET Requests and jqXHR
$(function () {
  function xhrInfo(label, jq) {
    $('#xhr').text(label + '\nstatus: ' + jq.status + '\nstatusText: ' + jq.statusText + '\nreadyState: ' + jq.readyState +
      '\nContent-Type: ' + jq.getResponseHeader('Content-Type') + '\nresponseText: ' + (jq.responseText || '').length + ' ký tự');
  }
  function bang(list) {
    return '<table><thead><tr><th>ID</th><th>Sản phẩm</th><th>Giá</th><th>Tồn kho</th></tr></thead><tbody>' +
      list.map(p => `<tr><td>${p.id}</td><td>${escapeHtml(p.ten)}</td><td>${vnd(p.gia)}</td><td>${p.ton}</td></tr>`).join('') + '</tbody></table>';
  }
  function loi(jq, textStatus, err) {
    $('#result').html('<p class="err">Yêu cầu thất bại: ' + escapeHtml(textStatus) + ' – ' + escapeHtml(err || 'không có phản hồi') + '</p>');
    xhrInfo('FAIL', jq);
  }
  $('[data-r]').on('click', function () {
    const r = $(this).data('r');
    $('#result').html('<p class="note">Đang tải…</p>');
    if (r === 'get') {
      $.get('products.json').done(function (data, textStatus, jqXHR) {
        const list = typeof data === 'string' ? JSON.parse(data) : data;
        $('#result').html('<p class="ok">Nhận được ' + list.length + ' sản phẩm. Phần tử đầu tiên:</p><pre class="out">' + escapeHtml(JSON.stringify(list[0], null, 2)) + '</pre>');
        xhrInfo('DONE (' + textStatus + ')', jqXHR);
      }).fail(loi).always(function () { console.log('GET products.json đã kết thúc'); });
    } else if (r === 'json') {
      $.getJSON('products.json').done(function (list, textStatus, jqXHR) {
        $('#result').html(bang(list));
        xhrInfo('getJSON DONE (' + textStatus + ')', jqXHR);
      }).fail(loi);
    } else if (r === 'api') {
      $.get('https://jsonplaceholder.typicode.com/posts', { _limit: 5 }).done(function (data, textStatus, jqXHR) {
        $('#result').html('<ol>' + data.map(p => '<li>' + escapeHtml(p.title) + '</li>').join('') + '</ol>');
        xhrInfo('API DONE (' + textStatus + ')', jqXHR);
      }).fail(loi);
    } else {
      $.get('khong-ton-tai.json').fail(loi);
    }
  });
});

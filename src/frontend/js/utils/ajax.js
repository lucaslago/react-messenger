import $ from 'jquery';

export function get(url) {
  return $.ajax({
    url: url,
    dataType: 'json',
    type: 'GET',
    cache: false
  });
}

export function post(url, data) {
  return $.ajax({
    url: url,
    dataType: 'json',
    type: 'POST',
    data: data
  });
}

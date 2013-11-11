var cleanAddress = $('.mapaddress').clone().children().remove().end().text().trim();
$('.mapaddress').empty();
$('.mapaddress').addClass('z-address-box');
$('.mapaddress').prepend('<a class="z-address">' + cleanAddress + '</a>');
var zButton = $('<img title="This is a title, yo" src=' + chrome.extension.getURL("icon.png") + '/>');
$('.mapaddress').prepend(zButton);
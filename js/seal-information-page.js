$(document).ready(function() {
	$('#lang-selector').change(function () {
		var key = 'lang';
		var value = $("#lang-selector option:selected").val();
		var uri = document.URL;
		var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
		var sep = uri.indexOf('?') !== -1 ? '&' : '?';
		var destURI = uri.match(re) ? uri.replace(re, '$1' + key + '=' + value + '$2') : (uri + sep + key + '=' + value);
		location.href = destURI;
	});
});

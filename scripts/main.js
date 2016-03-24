 var handleData = function(data) {
	var container = $('#search');
	console.log(data);
	data.results.forEach(function(val, i, arr) {
		var outerBox = $('<div class="outerBox"></div>');
		var imgLink = $('<a class="img-link"></a>', {href: val.url});
		var imgBox = $('<img/>', {src: val.Images[0].url_170x135});
		var title = $('<div class="title"></div');
		var titleLink = $('<a class="title-link"></a>', {href: val.url}).html(val.title);
		var seller = $('<a></a>', {href: val.Shop.url}).html(val.Shop.shop_name);
		var price = $('<span></span>').html('$' + val.price);





		

		imgLink.append(imgBox);
		outerBox.append(imgLink);
		title.append(titleLink);
		outerBox.append(title);
		outerBox.append(seller);
		outerBox.append(price);
		container.append(outerBox);
	});
}

var searchResults = {
	url: 'https://api.etsy.com/v2/listings/active.js?api_key=av02ayrtnof5gbguelm24tkl&keywords=whiskey&includes=Images,Shop',
	type: 'GET',
	dataType: 'jsonp',
	success: handleData		
};

$.ajax(searchResults);

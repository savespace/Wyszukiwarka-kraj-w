var url = 'https://restcountries.eu/rest/v2/name/',
	countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
    var title;
  	countriesList.empty();
	resp.forEach(function(item) {
        title = $('<h3>').text(item.name).append('<img src="' + item.flag + '" height="30">');
		 $('<li class="title">').append(title).appendTo(countriesList);
   		 $('<li>').text('nazwa kraju w języku ojczystym: ' + item.nativeName).appendTo(countriesList);
		 $('<li>').text('stolica: ' + item.capital).appendTo(countriesList);
		 $('<li>').text('region: ' + item.region).appendTo(countriesList);
		 $('<li>').text('waluta: ' + item.currencies[0].name +' (' + item.currencies[0].symbol + ')').appendTo(countriesList);
		 $('<li>').text('język: ' + item.languages[0].name).appendTo(countriesList);
		 $('<li>').text('powierzchnia: ' +  item.area +  ' km 2').appendTo(countriesList);
		 var borders = item.borders;
		 var caBorders = borders.join(', ');
		 if (!caBorders.length) {
			 $('<li>').text('kraje graniczące: brak').appendTo(countriesList);
			 }
			 else{
			 $('<li>').text('kraje graniczące: ' + caBorders).appendTo(countriesList);
			 }
});
}
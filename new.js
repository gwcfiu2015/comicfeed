
06
	var apikey = "myapikey";
07
	var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
08
	 
09
	// construct the uri with our apikey
10
	var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
11
	var query = "Gone with the Wind";
12
	 
13
	$(document).ready(function() {
14
	 
15
	  // send off the query
16
	  $.ajax({
17
	    url: moviesSearchUrl + '&q=' + encodeURI(query),
18
	    dataType: "jsonp",
19
	    success: searchCallback
20
	  });
21
	});
22
	 
23
	// callback for when we get back the results
24
	function searchCallback(data) {
25
	 $(document.body).append('Found ' + data.total + ' results for ' + query);
26
	 var movies = data.movies;
27
	 $.each(movies, function(index, movie) {
28
	   $(document.body).append('<h1>' + movie.title + '</h1>');
29
	   $(document.body).append('<img src="' + movie.posters.thumbnail + '" />');
30
	 });
31
	}
32
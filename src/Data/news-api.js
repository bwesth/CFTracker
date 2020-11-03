var unirest = require("unirest");

var req = unirest("GET", "https://rapidapi.p.rapidapi.com/api/search/NewsSearchAPI");

req.query({
	"pageSize": "10",
	"q": "climate change",
	"autoCorrect": "true",
	"pageNumber": "1",
	"toPublishedDate": "null",
	"fromPublishedDate": "null"
});

req.headers({
	"x-rapidapi-key": "16abdf544amsha0481382609fe81p13c2a6jsn6126ebe31040",
	"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
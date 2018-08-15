window.onload = function() {

	// JSON Feed
	var articlesContent = '{"articles":[{"id":"article_id_1","authors":["author_id_1","author_id_2","author_id_3","author_id_6"]},{"id":"article_id_2","authors":["author_id_1","author_id_4","author_id_5","author_id_6"]},{"id":"article_id_3","authors":["author_id_1","author_id_2"]},{"id":"article_id_4","authors":["author_id_1","author_id_6"]}]}';

	// Variables
	var data = JSON.parse(articlesContent);
	var dataOutput = '';

	// Showing Articles with Authors
	for (i in data.articles) {
		// Show Article Title
	    dataOutput += "<div class='outer-block'><h2><a href=''>" + data.articles[i].id + "</a></h2>";

	    // Show Author
	    dataOutput += "<div class='author'>Author: <a href=''>" + data.articles[i].authors[0]+ '</a></div>';
	    delete data.articles[i].authors[0];

	    // Show Co-Authors
	    dataOutput += "<div class='co-authors-container'>";
	    dataOutput += "<div class='author'>Co-authors: </div>";
	    dataOutput +='<ul>';

	    // Co-Authors
	    for (j in data.articles[i].authors) {
	    	dataOutput += '<li>';
	        dataOutput += "<a href=''>" + data.articles[i].authors[j] + "</a>";
	    }
	    dataOutput += "</ul></div></div>"
	}

	// Output ID
	document.getElementById("article").innerHTML = dataOutput;

	// Fizz Buzz - as discussed in interview
	for (var i=0; i < 101; i++) {
		if (i % 15 == 0) {
			console.log('Fizz Buzz')
		} else if (i % 3 == 0) {
			console.log('Fizz');
		} else if (i % 5 == 0) {
			console.log('Buzz')
		} else {
			console.log(i);
		}
	}
}
/*
Highlight the name of the product for which you want to find reviews on youtube and click on the bookmarklet
*/
javascript:
(
	function()
	{
    var query = "";
    if (window.getSelection) {
        query = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        query = document.selection.createRange().text;
    }
    query += " review";   
    window.open("https://www.youtube.com/results?search_query=" + encodeURIComponent(query).replace(/%20/g,'+'));
	}
)();
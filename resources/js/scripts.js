function ajaxLoadPage(pageName)
{
	var ajaxRequestUrl ="./" + pageName + "-page.html";

	$("#pageContent").load(ajaxRequestUrl, null, function(requestText, textStatus, xhr) {

		$("#aboutLink").removeClass("active");
		$("#experienceLink").removeClass("active");
		$("#contactLink").removeClass("active");

		$("#" + pageName + "Link").addClass("active");
		document.title = 'Aaron Weaver | ' + pageName.capitalizeFirstLetter();
	});
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$(document).ready(function() {
	$('#pageContent').load('./about-page.html', null, function(responseTxt, textStatus, xhr) {
	});
});
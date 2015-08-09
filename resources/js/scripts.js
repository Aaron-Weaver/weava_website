
var AboutPage = (function() {
	
	this.professionsList =
	[
		"Software Engineer",
		"Professional Googler",
		"Music Lover",
		"Web Developer",
		"Full Stacker",
		"Mobile Dude",
		"Stack = Overflown"
	];

	this.chosenIndex = 0;

	return {
		cycleText: function() {

			//console.log("CURRENT INDEX: " + chosenIndex);

			if(this.chosenIndex === this.professionsList.length - 1 || typeof this.chosenIndex === 'undefined')
			{
				chosenIndex = 0;
			}
			else
			{
				chosenIndex++;
			}

			$("#profession-text").fadeOut(2000, function()
			{
				$("#profession-text").html(professionsList[chosenIndex]).fadeIn(2000);
			});
		}
	};
})();


function ajaxLoadPage(pageName)
{
	var ajaxRequestUrl ="./" + pageName + "-page.html";
	var textCycleInterval;

	$("#pageContent").load(ajaxRequestUrl, null, function(requestText, textStatus, xhr) {

		$("#aboutLink").removeClass("active");
		$("#experienceLink").removeClass("active");
		$("#contactLink").removeClass("active");

		$("#" + pageName + "Link").addClass("active");
		document.title = 'Aaron Weaver | ' + pageName.capitalizeFirstLetter();

		if(pageName === "about")
		{
			$("#profession-text").fadeOut(0).fadeIn(2000);
			textCycleInterval = window.setInterval(AboutPage.cycleText, 5000);
		}
		else if(typeof textCycleInterval !== 'undefined')
		{
			clearInterval(textCycleInterval);
		}
	});
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

// $(document).ready(function() {
// 	ajaxLoadPage("about");
// 	$('#pageContent').load('./about-page.html', null, function(responseTxt, textStatus, xhr) {
// 	});
// });

$(document).ready(ajaxLoadPage("about"));
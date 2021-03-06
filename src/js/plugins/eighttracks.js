(function ($) {

	var plugin = scroblr.registerHost("eighttracks");

	plugin.hostre = new RegExp("8tracks\\.com", "i");
	plugin.scrape = function () {
		return {
			album:   $("#player .track_metadata .album > .detail").text(),
			artist:  $("#player .title_artist > .a").text(),
			percent: parseFloat($("#player_progress_bar_meter").width() / $("#player_progress_bar").width()),
			stopped: $("#player_play_button").css("display") == "block",
			title:   $("#player .title_artist > .t").text()
		};
	};
}(Zepto));

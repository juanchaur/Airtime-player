$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				title: "Bubble",
				m4a: "http://stream1.itacafm.com:8000/stream1",
				oga: "http://stream1.itacafm.com:8000/stream1"
			});
		},
		swfPath: "dist/jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});

	$("#headerLiveHolder").airtimeLiveTrackInfo({
		sourceDomain: "http://stream1.itacafm.com",
		text: {
			onAirNow:"Now Playing",
			offline:"Offline",
			current:"Current",
			next:"Next"
		},
		updatePeriod: 1000 //seconds
	});
});

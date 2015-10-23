$(function() {

	//-----------------------------About Light Control----------------------------------

	// read light status from MongoLab
	$.ajax( { url: "https://api.mongolab.com/api/1/databases/skillzone/collections/lights?apiKey=c1TikoDQW5CHtc2F0-UyWXFOHVU2-99m",
		  type: "GET",
		  contentType: "application/json" } )
		.success(function(lights) {
			for (n in lights) {
				if (lights[n].status == true) {
					$('#' + lights[n]._id.$oid).attr('src', 'images/light_on.jpg');
				} else {
					$('#' + lights[n]._id.$oid).attr('src', 'images/light_off.jpg');
				}
			}
		})

	// turn on the light
	$('.thumbnail .btn-primary').click(function(event) {
		// get MongoLab light document _id from img href
		var _id = event.target.href.split('#')[1];
		// change img to light_on.jpg
		$('#' + _id).attr('src', 'images/light_on.jpg');

		// turn on light document through MongoLab Data API
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/skillzone/collections/lights/" + _id + "?apiKey=c1TikoDQW5CHtc2F0-UyWXFOHVU2-99m",
		  data: JSON.stringify( { "$set" : { "status" : true } } ),
		  type: "PUT",
		  contentType: "application/json" } );
	})

	// turn off the light
	$('.thumbnail .btn-default').click(function(event) {
		// get MongoLab light document _id from img href
		var _id = event.target.href.split('#')[1];
		// change img to light_off.jpg
		$('#' + _id).attr('src', 'images/light_off.jpg');

		// turn off light document through MongoLab Data API
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/skillzone/collections/lights/" + _id + "?apiKey=c1TikoDQW5CHtc2F0-UyWXFOHVU2-99m",
		  data: JSON.stringify( { "$set" : { "status" : false } } ),
		  type: "PUT",
		  contentType: "application/json" } );
	})

	//-------------------------------------About Room Environment-----------------------------------

	// read room1 mode from MongoLab
	$.ajax( { url: "https://api.mongolab.com/api/1/databases/skillzone/collections/room?q={'id': 'room1'}&apiKey=c1TikoDQW5CHtc2F0-UyWXFOHVU2-99m",
		  type: "GET",
		  contentType: "application/json" } )
		.success(function(rooms) {
			// change back color 
			changeBgColor(rooms[0].mode);

			// get auto config mode
			if(rooms[0].isAuto) {
				$(":radio[value='true']").attr('checked', true);
			} else {
				$(":radio[value='false']").attr('checked', true);
			}

		})

	// set room1 mode 
	$('span').siblings('button').click(function(event) {
		var mode = event.target.innerText.toLowerCase();
		// change bg color
		changeBgColor(mode);

		// change room mode through MongoLab Data API
		$.ajax( { url: "https://api.mongolab.com/api/1/databases/skillzone/collections/room/5628800fe4b0dba439a3ed97?apiKey=c1TikoDQW5CHtc2F0-UyWXFOHVU2-99m",
		  data: JSON.stringify( { "$set" : { "mode" : mode } } ),
		  type: "PUT",
		  contentType: "application/json" } );
	})

	// set room1 config mode
	$(":radio[name='isAuto']").click(function(event){
		var isAuto = event.target.value == 'true' ? true : false;

		$.ajax( { url: "https://api.mongolab.com/api/1/databases/skillzone/collections/room/5628800fe4b0dba439a3ed97?apiKey=c1TikoDQW5CHtc2F0-UyWXFOHVU2-99m",
		  data: JSON.stringify( { "$set" : { "isAuto" : isAuto } } ),
		  type: "PUT",
		  contentType: "application/json" } );		
	})

	function changeBgColor(mode) {
		if (mode == 'gentle') {
			$('body').css('background-color', 'lightyellow');
		} else if (mode == 'dim') {
			$('body').css('background-color', 'DarkSeaGreen');
		} else {  //normal 
			$('body').css('background-color', 'lightblue');
		}
	}

	//-------------------------------------About Website--------------------------------------------

	
})
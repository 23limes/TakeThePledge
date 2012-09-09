
var loginPage = "#loginPage";
var token = "nL92du4h2_8XD3xW5udUugR9StoCaYIfDnHn6stmPy-CrDcyuPmrKMYM6oHJFaCNvWQHN_xCejLkH6PSYgunEM3psZ1ZF4H_cmjaVQIuwB7tveguLrUBzDivMwcL92kJuKLH23qEyBlJH8AlXtXZUpRUCvpBYDYrMnrKldTmrj8";
var timeStart;
var timeEnd;

$(document).ready(function () {

	window.location = "#mapPage"
	
	//button click for telenav
	$("#driveBtn").on('click', function(){
		var address, name;
		switch($("#destination").val()){
			case "cvs":		
				name = "CVS";
				address = "1411 Lincoln Boulevard Santa Monica, CA 90401";
				break;
			case "coffee":
				name = "Peet's Coffee";
				address = "829 Wilshire Boulevard Santa Monica, CA 90401"
				break;
			case "art":
				name = "Performing Arts Center";
				address = "1310 11th Street Santa Monica, CA 90401";
				break;
			case "store":
				name = "Apple Store";
				address = "1248 3rd Street Promenade Santa Monica, CA 90401";
				break;
		}
		
		var src = "http://apps.scout.me/v1/driveto?dt=" + encodeURI(address) + "&token=" + encodeURI(token) + "&name=" + name;
		//$("#map").prop("src", src);
		//$("#map").show();
		//$("#driveBtn").hide();
		window.location = src;
	});
	
	$("#btn-drive").on("click", function(){
		//start the timer
		timeStart = new Date();
	});
	
	$("#btn-arrive").on("click", function(){
		//end time
		timeEnd = new Date();
		alert(timeEnd - timeStart);
	});
	
	//swipe to change pages
	$("#mapContent").swipeleft(function() {
		$.mobile.changePage("#page-leaderboard");
	});
	$("#leaderContent").swiperight(function() {
		$.mobile.changePage("#page-map");
	});
	
	function PledgeViewModule() {
		var self = this;

		self.pledgeUser = ko.observable();
		
		self.loadComments = function(){
			//get comments from Usergrid API here...			
		};
		self.loadAwards = function(){
			//get awards frmo Usergrid API here...
		};
	}
	
	function PledgeUser(id, username, email, isDriving, points){
		this.id = ko.observable(id);
		this.username = ko.observable(username);
		this.email = ko.observable(email);
		this.isDriving = ko.observable(isDriving);
		this.points = ko.observable(points);
		this.comments = ko.observableArray([]);
		this.awards = ko.observable();
	}
	
	function Comments(data){
		this.id = ko.observable(data.id);
		this.text = ko.observable(data.text);
		this.ownerID = ko.observable(data.ownerID);
		this.targetID = ko.observable(data.targetID);
		this.dateStamp = ko.observable(data.dateStamp);
	}
	
	function Awards(isSafe, isEncourage, isTough){
		this.isSafe = ko.observable(isSafe);
		this.isEncourage = ko.observable(isEncourage);
		this.isTough = ko.observable(isTough);
	}

});

require(['Chart', 'quicksort', 'helpers'], function(Chart, quicksort, helpers) {
	var Chart = Chart.noConflict();
	var arguments = {
			values: [],
			times: []
		},
		shift = 0, delta = 50000,
		valueArrays = [],
		length = 20,
		times = [];

	for(var i = 0; i <= length; ++i) {
		arguments.values[i] = i * delta + shift;
	}
	
	for(var i = 1; i <= length; ++i) {
		valueArrays[i] = [];
		for(var j = 0; j < arguments.values[i]; ++j) {
			valueArrays[i][j] = helpers.randomInt(0, 10000);
		}

		times[i] = {
			start: new Date()
		};

		quicksort.sort(valueArrays[i]);
		
		times[i].finish = new Date();
		arguments.times[i] = times[i].finish - times[i].start;
	}

	console.log(arguments);

	var lineChartData = {
		labels : arguments.values,
		datasets : [
			{
				label: "Kroosh",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : arguments.times
			},
			{
				label: "Mykhalko",
				fillColor : "rgba(110,110,110,0.2)",
				strokeColor : "rgba(110,110,110,1)",
				pointColor : "rgba(110,110,110,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : arguments.vitalyTimes
			}
		]
	}

	var ctx = document.getElementById("myChart").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData);

});
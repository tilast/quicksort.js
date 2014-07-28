require(['Chart', 'quicksort', 'helpers', 'mergesort', 'selectionsort'], function(Chart, quicksort, helpers, mergesort, selectionsort) {
	var Chart = Chart.noConflict();
	var arguments = {
			values: [],
			timesQuicksort: [],
			timesMergesort: [],
			timesSelectionsort: []
		},
		shift = 0, delta = 2500,
		valueArrays = [],
		length = 20,
		timesQuicksort = [],
		timesMergesort = [],
		timesSelectionsort = [];

	for(var i = 0; i <= length; ++i) {
		arguments.values[i] = i * delta + shift;
	}
	
	for(var i = 1; i <= length; ++i) {
		valueArrays[i] = [];
		for(var j = 0; j < arguments.values[i]; ++j) {
			valueArrays[i][j] = helpers.randomInt(0, 10000);
		}

		timesQuicksort[i] = {
			start: new Date()
		};

		quicksort.sort(valueArrays[i].slice(0, valueArrays[i].length));
		
		timesQuicksort[i].finish = new Date();
		arguments.timesQuicksort[i] = timesQuicksort[i].finish - timesQuicksort[i].start;
		console.log("quick", arguments.values[i], '->', arguments.timesQuicksort[i]);

		timesMergesort[i] = {
			start: new Date()
		};

		mergesort.sort(valueArrays[i].slice(0, valueArrays[i].length));
		
		timesMergesort[i].finish = new Date();
		arguments.timesMergesort[i] = timesMergesort[i].finish - timesMergesort[i].start;
		console.log("merge", arguments.values[i], '->', arguments.timesMergesort[i]);

		timesSelectionsort[i] = {
			start: new Date()
		};

		selectionsort.sort(valueArrays[i].slice(0, valueArrays[i].length));
		
		timesSelectionsort[i].finish = new Date();
		arguments.timesSelectionsort[i] = timesSelectionsort[i].finish - timesSelectionsort[i].start;
		console.log("selection", arguments.values[i], '->', arguments.timesSelectionsort[i]);
	}

	// console.log(arguments);

	var lineChartData = {
		labels : arguments.values,
		datasets : [
			{
				label: "Quicksort",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : arguments.timesQuicksort
			},
			{
				label: "mergesort",
				fillColor : "rgba(110,110,110,0.2)",
				strokeColor : "rgba(110,110,110,1)",
				pointColor : "rgba(110,110,110,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : arguments.timesMergesort
			},
			{
				label: "selectionsort",
				fillColor : "rgba(154,65,210,0.2)",
				strokeColor : "rgba(154,65,210,1)",
				pointColor : "rgba(154,65,210,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : arguments.timesSelectionsort
			}
		]
	}

	var ctx = document.getElementById("myChart").getContext("2d");
	window.myLine = new Chart(ctx).Line(lineChartData);

});
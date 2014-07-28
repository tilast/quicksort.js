define("helpersVitaly", [], function(){

	var _swap = function(arr, i, j)
	{
		if( i != j && _isInRange(arr, i) && _isInRange(arr, j) )
		{
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
		return arr;
	}

	var _isInRange = function(arr, i)
	{
		return (i >= 0 && i < arr.length);
	}

	var _randomInt = function(start, end)
	{
		'use strict';
		var rand = Math.random();
		start = Math.round(start);
		end = Math.round(end);
		return start + Math.floor( ( rand == 1 ? 0.99 : rand )*(end - start + 1) );
	}

	return {
		swap : _swap,
		isInRange : _isInRange,
		randomInt : _randomInt
	};
});
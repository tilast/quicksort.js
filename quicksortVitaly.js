define("quicksortVitaly", ["helpersVitaly"], function(helpers) {

	var _quicksort = function(source_arr){
		'use strict';
		var n = source_arr.length;
		_partition(source_arr, 0, n - 1);
		return source_arr;
	}

	var _partition = function(source_arr, start, end)
	{
		if (start >= end)
		{
			return;
		}

		var pivot_index = helpers.randomInt(start, end), 
			i, j;

		helpers.swap(source_arr, start, pivot_index);

		var pivot = start;
		i = j = start + 1;
		
		while ( j <= end)
		{
			if (source_arr[j] < source_arr[pivot])
			{
				helpers.swap(source_arr, i, j);
				++i;
			}
			++j;
		}

		helpers.swap(source_arr, pivot, i-1);

		_partition(source_arr, start, i-2);
		_partition(source_arr, i, end);

	}

	return {
		sort: _quicksort
	};
});

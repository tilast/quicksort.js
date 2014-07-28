define("quicksort", ['helpers'], function(helpers) {
	/**
	* function _quicksort
	* @brief does quicksort
	* @param source - Array
	* @return Array - sorted array
	*/
	var _quicksort = function(source, returnNew) {
		'use strict';

		if(returnNew) {
			var sortArray = source.slice(0, source.length);
			_partition(sortArray, 0, sortArray.length - 1);

			return sortArray;
		} else {
			_partition(source, 0, source.length - 1);
		}		
	};

	/**
	* function _partition
	* @brief does partition operation
	* @param source - Array - source array
	* @param start - Int - start of partition
	* @param end - Int - end of partition
	* @return Array - sorted array
	*/
	var _partition = function(source, start, end) {
		if(start < end) {
			var pivotIndex = helpers.randomInt(start, end),
				i = j = start + 1,
				pivot = start;
				
			helpers.swap(source, start, pivotIndex);

			while(j <= end) {
				if(source[j] < source[pivot]) {
					helpers.swap(source, i, j);
					++i;
				}

				++j;
			}

			helpers.swap(source, i - 1, pivot);
			_partition(source, start, i - 2);
			_partition(source, i, end);
		}
	};

	return {
		sort: _quicksort
	};
});
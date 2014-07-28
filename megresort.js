define("mergesort", ['helpers'], function(helpers) {
	/**
	* function _quicksort
	* @brief does quicksort
	* @param source - Array
	* @return Array - sorted array
	*/
	var _mergesort = function(source, returnNew) {
		'use strict';

		if(returnNew) {
			var sortArray = source.slice(0, source.length);
			_recursion(sortArray);

			return sortArray;
		} else {
			_recursion(source);
		}		
	};

	var _recursion = function(array) {
		if(array.length < 2) {
			return array;
		} else {
			var middle 	= Math.floor(array.length / 2),
				left 	= array.slice(0, middle),
				right	= array.slice(middle, array.length);
		}
	};

	var _merge = function(arr1, arr2) {
		
	};

	return {
		sort: _mergesort
	};
});
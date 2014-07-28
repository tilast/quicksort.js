define("selectionsort", ['helpers'], function(helpers) {
	/**
	* function _quicksort
	* @brief does quicksort
	* @param source - Array
	* @return Array - sorted array
	*/
	var _selectionsort = function(source) {
		'use strict';

		for(var i = 0; i < source.length; ++i) {
			var min = i;
			for(var j = i + 1; j < source.length; ++j) {
				if(source[j] < source[min]) {
					min = j;
				}
			}
			if(min != i) {
				helpers.swap(source, i, min);
			}
		}
	};

	return {
		sort: _selectionsort
	};
});
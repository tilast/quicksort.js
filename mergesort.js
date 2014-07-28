define("mergesort", ['helpers'], function(helpers) {
	/**
	* function _quicksort
	* @brief does quicksort
	* @param source - Array
	* @return Array - sorted array
	*/
	var _mergesort = function(source) {
		'use strict';

		return _recursion(source);
	};

	var _recursion = function(array) {
		'use strict';

		if(array.length < 2) {
			return array;
		} else {
			var middle 	= Math.floor(array.length / 2),
				left 	= array.slice(0, middle),
				right	= array.slice(middle, array.length);

			left = _recursion(left);
			right = _recursion(right);
			return _merge(left, right);
		}
	};

	var _merge = function(arr1, arr2) {
		'use strict';
		
		var result = [];
		
		while(arr1.length && arr2.length) {
			if(arr1[0] < arr2[0]) {
				result.push(arr1.splice(0, 1)[0]);
			} else {
				result.push(arr2.splice(0, 1)[0]);
			}
		}

		if(arr1.length) {
			result = result.concat(arr1);
		} else if(arr2.length) {
			result = result.concat(arr2);
		}

		return result;
	};

	return {
		sort: _mergesort
	};
});
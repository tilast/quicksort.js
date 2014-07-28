define('helpers', [], function() {
	var _swap = function(source, i, j) {
		if(i != j && _isInRange(source, i) && _isInRange(source, j)) {
			source[i] += source[j];
			source[j] = source[i] - source[j];
			source[i] -= source[j];
		}
	};

	var _isInRange = function(source, i) {
		return i < source.length && i >= 0;
	}

	var _randomInt = function(start, end) {
		'use strict';

		start = Math.round(start);
		end = Math.round(end);
		var rand = Math.random();

		/* some theory of probability magic */
		return start + Math.floor( ( rand == 1 ? 0.99 : rand ) * (end - start + 1) );
	};

	return {
		swap      	:   _swap,
		isInRange 	: 	_isInRange,
		randomInt 	: 	_randomInt
	};
});
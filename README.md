main.js Optimizations:

1. changePizzaLines (Line 452)
	- Removed determineDX from changePizzaSizes

	- Stored the querySelectorAll for .randomPizzaContainer in a variable "randomPizzas" so the DOM
only needs to be accessed once

	- Added a switch statement that provides cases and percentage widths for each position on the
slider

	- Removed pixel conversion and simply made the pizzas change by a percentage

	- Main accomplishment: Stopped Forced Synchronous Layout (layout thrashing) from occurring!

2. updatePositions (Line 518)

	- Removed "document.body.scrollTop / 1250" from the for loop and stored it in a variable. This
prevents FSL (no dimension accessing and then style changes), and keeps us from accessing the
scroll position for every pizza.

	- Main accomplishment: Stopped FSL (which got the scrolling to run at 60fps)

Build Tool: GRUNT

	Plugins used: 'load-grunt-tasks', 'jshint', 'concat', 'uglify', 'csslint', 'cssmin', 'imagemin', 'gh-pages'
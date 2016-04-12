# Website Performance Opitimization

Project number 6 of Udacity's Frontend Web Developer Nanodegree, used to put our Critical Rendering Path optimization and jank eliminating skills into practice! The project requires `index.html` to reach a Google Pagespeed Insights score of 90 or above. It also requires pizza.html to scroll at 60fps and for the pizza resizing (using the slider) to complete in less than 5ms.

## Getting Started

### Build Tools

**Grunt** was the build tool used for this project. Checkout <a href="https://discussions.udacity.com/t/grunt-and-setting-up-a-grunt-workflow-intermediate/21984">Grunt and Setting up a Grunt Workflow</a> for more info and to get started with Grunt.

#### Dependecies

Checkout the package.json file to view the dependecies used in this project.

### Getting Up and Running

Clone the repository onto your local machine: `git clone https://github.com/zachnagatani/frontend-nanodegree-mobile-portfolio.git`

There are two main directories: `src` and `dist`. All optimizations were made in the src directory.

	<ol>
		<li>From the command line, run `grunt`. This will perform the optimizations necessary and create the `dist` folder. (This folder is already present in the current/finished repository).</li>

		<li>After running `grunt`, **you must make sure that `index.html` is copied from `src` and placed in the `dist` folder. You must also make sure that `pizza.html` is copied from `src/views` and placed in `dist/views`.</li>

		<li>Both of the above files (located in 'dist' and 'dist/views') will need their link and script tags changed to have a "min" extension added to them in order for the `dist` folder to function properly.</li>

		<li>From the command line, run `grunt gh-pages` to push to Github Pages for hosting!</li>
	</ol>

## Optimizations:

### index.html

- Minified the CSS and JavaScript
- Inlined the CSS (eliminate render-blocking CSS)
- Added `media=print` to the link tag referencing print.css (eliminate render-blocking CSS)
- Added the async attribute to the Google Analytics script tag (eliminate render-blocking JavaScript)
- Optimized images for faster delivery

### pizza.html/main.js

	<ol>
		<li>changePizzaLines (Line 452)
			- Removed determineDX from changePizzaSizes

			- Stored the querySelectorAll for .randomPizzaContainer in a variable "randomPizzas" so the DOM
		only needs to be accessed once

			- Added a switch statement that provides cases and percentage widths for each position on the
		slider

			- Removed pixel conversion and simply made the pizzas change by a percentage

			- Main accomplishment: Stopped Forced Synchronous Layout (layout thrashing) from occurring!</li>

		<li>updatePositions (Line 518)

			- Removed "document.body.scrollTop / 1250" from the for loop and stored it in a variable. This
		prevents FSL (no dimension accessing and then style changes), and keeps us from accessing the
		scroll position for every pizza.

			- Main accomplishment: Stopped FSL (which got the scrolling to run at 60fps)</li>
	</ol>
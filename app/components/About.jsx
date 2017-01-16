var React = require('react');

var About = (props) => {
	return(
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>
				this is a weather application build on React. I have built this for the Complete
				React Web App Developer Course.
			</p>
			<p>
				Here are some of the tools I used:
			</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This is was the Javascript framework used.
				</li>
				<li>
					<a href="https://openweathermap.org">Open Weather Map</a> - this is Using to get the weather of any city.
				</li>
			</ul>
		</div>
	);
};

module.exports = About;
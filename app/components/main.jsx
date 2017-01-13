var React = require('react');

//locales
const Nav = require('Nav');

var Main = (props) => {
	return(
    	<div>
    		<Nav/>
        	<h2>Main component</h2>
        	{props.children}
    	</div>
    );
}

module.exports = Main;

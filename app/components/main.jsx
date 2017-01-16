var React = require('react');

//locales
const Nav = require('Nav');

var Main = (props) => {
	return(
    	<div>
    		<Nav/>
    		<div className="row">
    			<div className="columns medium-6 large-4 small-centered">
        			<h2>Main component</h2>
					{props.children}
				</div>
    		</div>
    	</div>
    );
}

module.exports = Main;

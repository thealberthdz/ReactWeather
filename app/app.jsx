var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//locales
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app.css
require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<IndexRoute component={Weather}/>
    	<Route path="about" component={About} />
    	<Route path="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);

// class Left extends React.Component {
// 	render() {
// 		return 
// 			<div className="container left">
// 				<button class="btn btn-right">CREATE</button>
// 				<br/>
// 				<br/>
// 			</div>	
// 	}
// }

// ReactDOM.render(
// 	<h1>Kanban Board</h1>,
// 	<Left />,
// 	document.getElementById('rootElement')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';

function Header() {
	return (
		<nav className='blue-grey darken-3'>
			<div className="nav-wrapper">
				<a href="!#" className="brand-logo">Movies research</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="!#">Sass</a></li>
					<li><a href="!#">Components</a></li>
					<li><a href="!#">JavaScript</a></li>
				</ul>
			</div>
		</nav>)
}

export { Header }
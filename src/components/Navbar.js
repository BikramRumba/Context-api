import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export class Navbar extends Component {
	render() {
		// console.log(this.context); // it should be equalt to {...this.state} value that we created in context provider

		return (
			<ThemeContext.Consumer>
				{(context) => {
					const { isLightTheme, light, dark } = context;
					const theme = isLightTheme ? light : dark;
					return (
						<nav style={{ background: theme.ui, color: theme.syntax }}>
							<h1>Context App</h1>
							<ul>
								<li>Home</li>
								<li>About</li>
								<li>Contact</li>
							</ul>
						</nav>
					);
				}}
			</ThemeContext.Consumer>
		);
	}
}

export default Navbar;

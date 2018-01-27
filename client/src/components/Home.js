import React, { Component } from 'react'

import { Link } from "react-router";

class Home extends Component {
	render() {
		return(
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">NYT Scrubber</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav navbar-right">
							<li><Link to="/search">Search</Link></li>
							<li><Link to="/saved">Saved Articles</Link></li>
						</ul>
					</div>
				</nav>

				<div className="jumbotron">
				  <h1 className="display-4 text-center">New York Times Article Scrubber</h1>
				  <h3 className="text-center">Search for and save articles of interest.</h3>
				</div>

				{this.props.children}

				<footer>
          <hr />
          <p className="pull-right">
            <i className="fa fa-github" aria-hidden="true"></i>
            Proudly built using React.js
          </p>
        </footer>
			</div>
		)
	}
}
import React, { Component } from 'react';

class Query extends Component {
	state = {
		search: 'meme',
		start: '2000',
		end: '2017',
	}

	handleChange = (event) => {
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.updateSearch(this.state.search, this.state.start, this.state.end);
	}

	render() {
		return (
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="card w-100">
		  				<div className="card-body">
		    				<h1 className="card-title">Query</h1>
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">

										<h4 className=""><strong>Topic</strong></h4>
											<input
											type="text"
											value={this.state.search}
											className="form-control"
											id="search"
											onChange={this.handleChange}
											required
										/>

										<h4><strong>Start Year</strong></h4>
										<input
											type="number"
											value={this.state.start}
											className="form-control"
											id="start"
											onChange={this.handleChange}
											required
										/>

										<h4><strong>End Year</strong></h4>
										<input
											type="number"
											value={this.state.end}
											className="form-control"
											id="end"
											onChange={this.handleChange}
											required
										/>

									</div>

									<div className="pull-right">
										<button
											type="submit"
											className="btn btn-danger"
											>
											<h4>Submit</h4>
										</button>
									</div>
								</form>
						  </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Query;
import React from "react";

const App = () => {
	return (
		<div className="App-component">
			<header className="container">
				<nav className="navbar navbar-expand-lg navbar-light ">
					<div className="navbar-brand">React Bootcamp day-01</div>
				</nav>
				<div className="row">
					<div className="col-md-12">
						<h1 className="header-title">
							React bootcamp is my first attempt to contribute to
							open source community
						</h1>
						<p className="header-content">
							Welcome to the exiting world of react.You will learn
							everything needed to build real-world complex apps
						</p>
						<button
							type="button"
							className="btn btn-secondary btn-lg"
						>
							<i className="fa fa-code" aria-hidden="true" />{" "}
							source code
						</button>
					</div>
				</div>
			</header>
		</div>
	);
};

export default App;

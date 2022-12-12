import React, { useState } from "react";
import PropTypes from "prop-types";

function Navbar(props) {
	const [modeText, setModeText] = useState("Enable");

	function handleClick() {
		props.toggleFunc();
		if (modeText == "Disable") {
			setModeText("Enable");
		} else {
			setModeText("Disable");
		}
	}

	return (
		<>
			<nav className={`navbar  sticky-top navbar-expand-lg bg-${props.mode}`}>
				<div className="container-fluid">
					<a className={`navbar-brand text-${props.invMode}`} href="#">
						{props.name}
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className={`nav-link active text-${props.invMode}`}
									aria-current="page"
									href={props.link}
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									className={`nav-link text-${props.invMode}`}
									href={props.link}
								>
									About
								</a>
							</li>
						</ul>
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								role="switch"
								id="flexSwitchCheckDefault"
								onClick={handleClick}
							/>
							<label
								className={`form-check-label text-${props.invMode}`}
								htmlFor="flexSwitchCheckDefault"
							>
								{modeText} Dark Mode
							</label>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

// sets the kind of data prop should be allowed to take in.
Navbar.propTypes = {
	name: PropTypes.string,
	link: PropTypes.string,
};

// set the default value of prop if data not sent.

Navbar.defaultProps = {
	name: "setName",
	link: "/",
};

export default Navbar;

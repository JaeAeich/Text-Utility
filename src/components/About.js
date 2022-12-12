import React from "react";


function About(props) {
	return (
		<div
			className={`text-${props.invMode} container border border-light rounded`}
		>
			<h2 className={`my-3 text-${props.invMode}`}>About Us</h2>
			<div className="accordion container my-3" id="accordionExample">
				<div className="accordion-item">
					<h2
						className={`accordion-header text-${props.invMode}`}
						id="headingOne"
					>
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Goal
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">I don't really know, fr fr.</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo"
						>
							Our Agenda
						</button>
					</h2>
					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">I told you idk!</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree"
						>
							Our Mission
						</button>
					</h2>
					<div
						id="collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="headingThree"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							Stop asking me random shit, idk , I told you, didn't I? GO AWAY!!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;

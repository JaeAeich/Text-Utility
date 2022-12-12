import React, { useState } from "react";

function TextArea(props) {
	const [text, setText] = useState("");

	function countWord() {
		let c = 0;
		const newT = text.split(" ");
		for (let i = 0; i < newT.length; i++) {
			if (newT[i] === "") {
				continue;
			} else c++;
		}
		return c;
	}

	function handleOnChange(e) {
		setText(e.target.value);
	}

	function handleUpperClick() {
		let newStrng = text.toUpperCase();
		setText(newStrng);
		props.handleAlert("Converted to upper case", "Success");
	}

	function handleLowerClick() {
		let newStrng = text.toLowerCase();
		setText(newStrng);
		props.handleAlert("Converted to lower case", "Success");
	}

	function handleClickInvert() {
		let newStrng = "";
		for (let ch in text) {
			if (text[ch] == text[ch].toLowerCase()) {
				newStrng += text[ch].toUpperCase();
			} else {
				newStrng += text[ch].toLowerCase();
			}
		}
		setText(newStrng);
		props.handleAlert("Cases inverted", "Success");
	}

	function handleClickClear() {
		setText("");
		props.handleAlert("Text cleared", "Success");
	}

	return (
		<>
			<div className="container mb-3 my-3 border border-light rounded">
				<label
					htmlFor="exampleFormControlTextarea1"
					className={`form-label my-3 text-${props.invMode}`}
				>
					Enter your text here :
				</label>
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows={5}
					value={text}
					onChange={handleOnChange}
				/>
				<button
					onClick={handleUpperClick}
					className={`btn btn-primary my-1  text-${props.invMode}`}
				>
					Convert To Upper Case
				</button>
				<button
					onClick={handleLowerClick}
					className={`btn btn-primary my-1 mx-1 text-${props.invMode}`}
				>
					Convert To Lower Case
				</button>
				<button
					onClick={handleClickInvert}
					className={`btn btn-primary my-1 mx-1 text-${props.invMode}`}
				>
					Invert Cases
				</button>
				<button
					onClick={handleClickClear}
					className={`btn btn-primary my-1 mx-31text-${props.invMode}`}
				>
					Clear
				</button>
			</div>

			<div className="container border border-light rounded">
				<h1 className={`text-${props.invMode}`}>Your Text Summary :</h1>
				<p className={`text-${props.invMode}`}>{text.length} characters</p>
				<p className={`text-${props.invMode}`}>{countWord()} words</p>
				<p className={`text-${props.invMode}`}>
					Time to read (avg): {Math.round((1 / 35) * countWord() * 100) / 100}{" "}
					Minutes
				</p>
			</div>
			<div className="container my-3 border border-light rounded">
				<h2 className={`text-${props.invMode}`}>Preview :</h2>
				<p className={`text-${props.invMode}`}>{text}</p>
			</div>
		</>
	);
}

export default TextArea;

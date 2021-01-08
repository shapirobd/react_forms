import React from "react";
import "./Box.css";

const Box = ({ color, width, height, handleDelete }) => {
	return (
		<div className="Box-container">
			<div
				className="Box"
				style={{ backgroundColor: color, width: width, height: height }}
			></div>
			<button className="Box-btn" onClick={handleDelete}>
				X
			</button>
		</div>
	);
};

export default Box;

import React, { useState } from "react";

const Box = ({ color, width, height }) => {
	const initialState = [];
	const [boxes, setBoxes] = useState();
	return <div styles={{ color: color, width: width, height: height }}></div>;
};

export default Box;

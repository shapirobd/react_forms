import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const [boxes, setBoxes] = useState();
	return (
		<div className="BoxList">
			{boxes.map((box) => (
				<Box />
			))}
			<NewBoxForm />
		</div>
	);
};

export default BoxList;

import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";

const BoxList = () => {
	const INITIAL_STATE = [];
	const [boxes, setBoxes] = useState(INITIAL_STATE);
	const addBox = (newBox) => {
		setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
	};
	const handleDelete = (box) => {
		setBoxes(boxes.filter((b) => b.id !== box.id));
	};
	return (
		<div className="BoxList">
			<h3>Box Creator</h3>
			<NewBoxForm addBox={addBox} />
			<div>
				{boxes.map((box) => (
					<Box
						color={box.color}
						width={box.width}
						height={box.height}
						handleDelete={() => handleDelete(box)}
						key={box.id}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;

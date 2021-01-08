import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = {
		color: "",
		width: "",
		height: "",
	};
	const [formData, setFormData] = useState(INITIAL_STATE);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	};
	console.log(formData);
	return (
		<div className="NewBoxForm">
			<form onSubmit={handleSubmit}>
				<label htmlFor="color">Color: </label>
				<input
					id="color"
					type="text"
					name="color"
					placeholder="Enter color"
					value={formData.color}
					onChange={handleChange}
				/>
				<label htmlFor="width">Width: </label>
				<input
					id="width"
					type="text"
					name="width"
					placeholder="Enter width"
					value={formData.width}
					onChange={handleChange}
				/>
				<label htmlFor="height">Height: </label>
				<input
					id="height"
					type="text"
					name="height"
					placeholder="Enter height"
					value={formData.height}
					onChange={handleChange}
				/>
				<button type="submit">Create Box</button>
			</form>
		</div>
	);
};

export default NewBoxForm;

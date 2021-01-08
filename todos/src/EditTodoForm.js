import React, { useState } from "react";

const EditTodoForm = ({
	editTodo,
	visibility,
	toggleEditFormVisibility,
	originalTodo,
}) => {
	const INITIAL_STATE = {
		task: "",
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
		editTodo(originalTodo, formData);
		setFormData(INITIAL_STATE);
		toggleEditFormVisibility();
	};
	return (
		<div className="NewTodoForm" style={{ display: visibility }}>
			<h4>Edit Todo</h4>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="task"
					name="task"
					placeholder="Edit todo"
					onChange={handleChange}
					value={formData.task}
				/>
				<button>Edit Todo</button>
			</form>
		</div>
	);
};

export default EditTodoForm;

import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
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
		addTodo({ ...formData });
		setFormData(INITIAL_STATE);
	};
	return (
		<div className="NewTodoForm">
			<h3>Todo List</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="task">Add Todo</label>
				<input
					type="text"
					id="task"
					name="task"
					placeholder="Enter new todo"
					onChange={handleChange}
					value={formData.task}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default NewTodoForm;

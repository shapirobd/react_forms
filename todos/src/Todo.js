import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";

const Todo = ({ task, removeTodo, editTodo }) => {
	const INITIAL_STATE = "none";
	const [editFormVisibility, setEditFormVisibility] = useState(INITIAL_STATE);
	const toggleEditFormVisibility = () => {
		console.log("toggle");
		setEditFormVisibility((editFormVisibility) =>
			editFormVisibility === "none" ? "block" : "none"
		);
	};
	return (
		<div className="Todo">
			<p>{task}</p>
			<button onClick={removeTodo}>X</button>
			<button onClick={toggleEditFormVisibility}>Edit</button>
			<EditTodoForm
				toggleEditFormVisibility={toggleEditFormVisibility}
				visibility={editFormVisibility}
				editTodo={editTodo}
				originalTodo={task}
			/>
		</div>
	);
};

export default Todo;

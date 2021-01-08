import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";

const Todo = ({ task, removeTodo, editTodo, completeTodo, completed }) => {
	const EDIT_FORM_INITIAL_STATE = "none";
	const COMPLETE_BTN_INITIAL_STATE = "Mark as Completed";
	const TODO_STRIKE_INITIAL_STATE = "none";
	const [editFormVisibility, setEditFormVisibility] = useState(
		EDIT_FORM_INITIAL_STATE
	);
	const [completeBtnText, setCompleteBtnText] = useState(
		COMPLETE_BTN_INITIAL_STATE
	);
	const [todoStrike, setTodoStrike] = useState(TODO_STRIKE_INITIAL_STATE);
	const toggleEditFormVisibility = () => {
		setEditFormVisibility((editFormVisibility) =>
			editFormVisibility === "none" ? "block" : "none"
		);
	};
	const toggleCompleteBtnText = () => {
		setCompleteBtnText((completeBtnText) =>
			completeBtnText === "Mark as Completed"
				? "Mark as Incomplete"
				: "Mark as Completed"
		);
	};
	const toggleTodoStrike = () => {
		setTodoStrike((todoStrike) =>
			todoStrike === "none" ? "line-through" : "none"
		);
	};
	const handleCompleteBtnClick = () => {
		toggleTodoStrike();
		toggleCompleteBtnText();
	};
	return (
		<div className="Todo">
			<p style={{ textDecoration: todoStrike }}>{task}</p>
			<button onClick={removeTodo}>X</button>
			<button onClick={toggleEditFormVisibility}>Edit</button>
			<button onClick={handleCompleteBtnClick}>{completeBtnText}</button>
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

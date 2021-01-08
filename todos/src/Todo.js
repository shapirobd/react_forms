import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Collapse from "@material-ui/core/Collapse";

import "./Todo.css";

const Todo = ({ task, removeTodo, editTodo, completeTodo, completed }) => {
	const [open, setOpen] = React.useState(false);

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
		setOpen(!open);
		setEditFormVisibility((editFormVisibility) =>
			editFormVisibility === "none" ? "inline-block" : "none"
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
		<>
			<TableRow className="Todo">
				<TableCell>
					<p style={{ textDecoration: todoStrike }}>{task}</p>
				</TableCell>
				<TableCell>
					<button className="Todo-edit-btn" onClick={toggleEditFormVisibility}>
						Edit
					</button>
				</TableCell>
				<TableCell>
					<button className="Todo-remove-btn" onClick={removeTodo}>
						X
					</button>
				</TableCell>
				<TableCell>
					<button
						className="Todo-complete-btn"
						onClick={handleCompleteBtnClick}
					>
						{completeBtnText}
					</button>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<EditTodoForm
							toggleEditFormVisibility={toggleEditFormVisibility}
							visibility={editFormVisibility}
							editTodo={editTodo}
							originalTodo={task}
						/>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};

export default Todo;

import React from "react";

const Todo = ({ task, removeTodo }) => {
	return (
		<div className="Todo">
			<p>{task}</p>
			<button onClick={removeTodo}>X</button>
		</div>
	);
};

export default Todo;

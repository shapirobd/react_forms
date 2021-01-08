import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import uuid from "uuid/v4";

const TodoList = () => {
	const INITIAL_STATE = [];
	const [todos, setTodos] = useState(INITIAL_STATE);
	const addTodo = (todo) => {
		const { task } = todo;
		setTodos((todos) => [...todos, { task, id: uuid(), completed: false }]);
	};
	const removeTodo = (todo) => {
		setTodos(todos.filter((t) => t.id !== todo.id));
	};
	const editTodo = (oldTodo, newTodo) => {
		setTodos(
			todos.map((todo) => {
				if (todo.task === oldTodo) {
					return { task: newTodo.task };
				}
			})
		);
	};
	const completeTodo = (todo) => {
		setTodos(
			todos.map((t) => {
				if (todo.id === t.id) {
					return { ...todo, completed: true };
				}
			})
		);
	};
	console.log(todos);
	return (
		<div className="TodoList">
			<NewTodoForm addTodo={addTodo} />
			<div>
				<ul>
					{todos.map((todo) => (
						<Todo
							task={todo.task}
							removeTodo={() => {
								removeTodo(todo);
							}}
							editTodo={editTodo}
							completeTodo={() => completeTodo(todo)}
							completed={todo.completed}
							key={todo.id}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;

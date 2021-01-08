import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import uuid from "uuid/v4";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TodoList = () => {
	const useStyles = makeStyles({
		table: {
			backgroundColor: "#BBB8B6",
		},
	});

	const classes = useStyles();
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
			<TableContainer component={Paper}>
				<Table className={classes.table}>
					<TableBody>
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
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default TodoList;

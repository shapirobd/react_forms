import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", () => {
	render(<TodoList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should add new todo to list when form submits", () => {
	const { getByLabelText, queryByText } = render(<TodoList />);
	const input = getByLabelText("Add Todo");
	const btn = queryByText("Submit");
	expect(queryByText("Clean bedroom")).not.toBeInTheDocument();

	fireEvent.change(input, { target: { value: "Clean bedroom" } });
	fireEvent.click(btn);
	expect(queryByText("Clean bedroom")).toBeInTheDocument();
});

it("should remove a todo when click on X button", () => {
	const { queryByText, getByLabelText } = render(<TodoList />);
	const input = getByLabelText("Add Todo");
	const submitBtn = queryByText("Submit");
	fireEvent.change(input, { target: { value: "Make the bed" } });
	fireEvent.click(submitBtn);
	expect(queryByText("Make the bed")).toBeInTheDocument();

	const deleteBtn = queryByText("X");
	fireEvent.click(deleteBtn);
	expect(queryByText("Make the bed")).not.toBeInTheDocument();
});

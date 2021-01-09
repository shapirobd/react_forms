import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", () => {
	render(<Todo />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<Todo />);
	expect(asFragment()).toMatchSnapshot();
});

it("contains the given task text", () => {
	const { queryByText } = render(<Todo task="Do dishes" />);
	expect(queryByText("Do dishes")).toBeInTheDocument();
});

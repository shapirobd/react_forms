import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
	render(<BoxList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should add new box to list when form submits", () => {
	const { getByLabelText, queryByText, queryByRole } = render(<BoxList />);
	const colorInput = getByLabelText("Color");
	const widthInput = getByLabelText("Width");
	const heightInput = getByLabelText("Height");
	const btn = queryByText("Create Box");

	expect(queryByRole("box")).not.toBeInTheDocument();
	fireEvent.change(colorInput, { target: { value: `black` } });
	fireEvent.change(widthInput, { target: { value: `25px` } });
	fireEvent.change(heightInput, { target: { value: `35px` } });
	fireEvent.click(btn);
	expect(queryByRole("box")).toBeInTheDocument();
});

it("should remove a box when you click on X button", () => {
	const { getByLabelText, queryByText, queryByRole } = render(<BoxList />);
	const colorInput = getByLabelText("Color");
	const widthInput = getByLabelText("Width");
	const heightInput = getByLabelText("Height");
	const submitBtn = queryByText("Create Box");

	fireEvent.change(colorInput, { target: { value: `red` } });
	fireEvent.change(widthInput, { target: { value: `50px` } });
	fireEvent.change(heightInput, { target: { value: `50px` } });
	fireEvent.click(submitBtn);
	expect(queryByRole("box")).toBeInTheDocument();

	const deleteBtn = queryByText("X");
	fireEvent.click(deleteBtn);
	expect(queryByRole("box")).not.toBeInTheDocument();
});

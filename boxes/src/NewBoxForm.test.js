import {
	queryAllByAltText,
	queryByAttribute,
	queryHelpers,
	render,
	screen,
	fireEvent,
} from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid/v4";

it("renders without crashing", () => {
	render(<NewBoxForm />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<NewBoxForm />);
	expect(asFragment()).toMatchSnapshot();
});

// it("should add new item", () => {
// 	const { getByLabelText, queryByText, queryByRole } = render(<NewBoxForm />);
// 	const colorInput = getByLabelText("Color");
// 	const widthInput = getByLabelText("Width");
// 	const heightInput = getByLabelText("Height");
// 	const btn = queryByText("Create Box");

// 	expect(queryByRole("box")).not.toBeInTheDocument();
// 	fireEvent.change(colorInput, { target: { value: `black` } });
// 	fireEvent.change(widthInput, { target: { value: `25px` } });
// 	fireEvent.change(heightInput, { target: { value: `35px` } });
// 	fireEvent.click(btn);
// 	expect(queryByRole("box")).toBeInTheDocument();
// });

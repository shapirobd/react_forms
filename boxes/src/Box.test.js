import { render, screen } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", () => {
	render(<Box />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<Box />);
	expect(asFragment()).toMatchSnapshot();
});

it("has correct color, height and width", () => {
	const { getByRole } = render(<Box color="blue" width="45px" height="30px" />);
	expect(getByRole("box")).toHaveStyle("background-color : blue");
	expect(getByRole("box")).toHaveStyle("width : 45px");
	expect(getByRole("box")).toHaveStyle("height : 30px");
});

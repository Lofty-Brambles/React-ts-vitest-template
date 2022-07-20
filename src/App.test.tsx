/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Main App Component", () => {
	test("rendering", () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});

	test("tracks click counts once", async () => {
		render(<App />);
		const btn = screen.getByRole("button");

		await userEvent.click(btn);
		expect(btn.textContent).toMatch(/1/);
	});

	test("tracks click count for multiple times", async () => {
		render(<App />);
		const btn = screen.getByRole("button");

		await userEvent.tripleClick(btn);
		expect(btn.textContent).toMatch(/3/);
	});

	test("doesn't reflect changes when clicked elsewhere", () => {
		const { container } = render(<App />);
		const list = screen.getByRole("list");

		userEvent.click(list);

		expect(container).toMatchSnapshot();
	});
});

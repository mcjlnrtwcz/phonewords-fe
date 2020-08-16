import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("deletes a character", () => {
  const { getByText } = render(<App />);
  const inputButton = getByText("2");
  const deleteButton = getByText("DEL");
  fireEvent.click(inputButton);
  fireEvent.click(inputButton);
  const screen = getByText("22");
  fireEvent.click(deleteButton);
  expect(screen.innerHTML).toBe("2");
});

test("clears screen", () => {
  const { getByText } = render(<App />);
  const inputButton = getByText("3");
  const clearButton = getByText("CLR");
  fireEvent.click(inputButton);
  fireEvent.click(inputButton);
  fireEvent.click(inputButton);
  const screen = getByText("333");
  fireEvent.click(clearButton);
  expect(screen.innerHTML).toBe("");
});

test("display found predictions", () => {});

test("handle no predictions", () => {});

test("handle loading", () => {});

test("handle API error", () => {});

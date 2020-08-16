import React from "react";
import { render, fireEvent, wait, act } from "@testing-library/react";
import axios from "axios";

import App from "./App";

jest.mock("axios");
jest.useFakeTimers();

beforeEach(() => axios.mockClear());

test("display found predictions", async () => {
  axios.mockResolvedValue({ data: ["first", "second"] });

  const { getByText } = render(<App />);
  const inputButton = getByText("2");
  fireEvent.click(inputButton);

  act(() => jest.runOnlyPendingTimers());
  await wait(() =>
    expect(axios).toHaveBeenCalledWith({
      data: undefined,
      headers: {},
      method: "get",
      url: "http://localhost:3001/predictions/2",
    })
  );

  expect(getByText("first")).toBeInTheDocument();
  expect(getByText("second")).toBeInTheDocument();
});

test("handle no predictions", async () => {
  axios.mockResolvedValue({ data: [] });

  const { getByText } = render(<App />);
  const inputButton = getByText("9");
  fireEvent.click(inputButton);

  act(() => jest.runOnlyPendingTimers());
  await wait(() =>
    expect(axios).toHaveBeenCalledWith({
      data: undefined,
      headers: {},
      method: "get",
      url: "http://localhost:3001/predictions/9",
    })
  );

  expect(getByText("Sorry, can't predict the word")).toBeInTheDocument();
});

test("send only 1 request for multiple clicks", async () => {
  axios.mockResolvedValue({ data: ["result"] });

  const { getByText } = render(<App />);
  const inputButton = getByText("2");
  fireEvent.click(inputButton);
  fireEvent.click(inputButton);
  fireEvent.click(inputButton);

  act(() => jest.runOnlyPendingTimers());
  await wait(() => {
    expect(axios).toHaveBeenCalledTimes(1);
  });
});

test("handle loading", () => {
  axios.mockResolvedValue({ data: ["result"] });

  const { getByText, getByTestId } = render(<App />);

  const predictionsContainer = getByTestId("predictions");
  expect(predictionsContainer).not.toHaveClass("loading");

  const inputButton = getByText("2");
  fireEvent.click(inputButton);
  expect(predictionsContainer).toHaveClass("loading");
});

test("handle API error", async () => {
  axios.mockRejectedValue({});

  const { getByText } = render(<App />);
  const inputButton = getByText("2");
  fireEvent.click(inputButton);

  act(() => jest.runOnlyPendingTimers());
  await wait(() => expect(axios).toHaveBeenCalled());

  expect(getByText("Can't fetch predictions - API error")).toBeInTheDocument();
});

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

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  const { getByText } = render(<App />);
  const header = getByText(/PhoneWords/i);
  expect(header).toBeInTheDocument();
});

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Alex Alan Nunes' name", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Alex Alan Nunes/i);
  expect(titleElement).toBeInTheDocument();
});

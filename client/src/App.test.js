import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("mount App and display button", async () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId("button");

  expect(btn).toBeTruthy();
  fireEvent.click(btn);

  // expect(getByTestId("button")).toHaveAttribute("onClick");
});

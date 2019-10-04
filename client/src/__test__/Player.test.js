import React from "react";

import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import Players from "../components/Players";
import data from "../../../data";

test("mount Players", async () => {
  const { getByTestId } = render(<Players />);
});

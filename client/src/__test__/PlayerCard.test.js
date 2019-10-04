import React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PlayerCard from "../components/PlayerCard";

test("mount PlayerCard and display text", async () => {
  const { getByTestId } = render(<PlayerCard />);
  expect(getByTestId("player-card")).toHaveTextContent("name");
  expect(getByTestId("player-card")).toHaveTextContent("country");
  expect(getByTestId("player-card")).toHaveTextContent("search number");
});

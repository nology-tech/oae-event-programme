import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { customRender } from "../../utils/testUtils";

test("The links are contain in the page", () => {
  customRender(<Navbar />);
  const links = screen.getAllByRole("link");
  expect(links[0]).toHaveAttribute("href", "/event-schedule");
  expect(links[1]).toHaveAttribute("href", "/");
  expect(links[2]).toHaveAttribute("href", "/our-story");
});

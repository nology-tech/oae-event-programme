import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { customRender } from "../../utils/testUtils";

test("The links are contain in the page", () => {
  customRender(<Navbar eventId="123" />);
  const links = screen.getAllByRole("link");
  expect(links[0]).toHaveAttribute("href", "/123/event-schedule");
  expect(links[1]).toHaveAttribute("href", "/123/home");
  expect(links[2]).toHaveAttribute("href", "/123/our-story");
});

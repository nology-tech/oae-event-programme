import { screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { customRender } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";

test("The links are contained in the page", () => {
  customRender(<Navbar eventId="123" />);
  const links = screen.getAllByRole("link");
  expect(links[0]).toHaveAttribute("href", "/123/event-schedule");
  expect(links[1]).toHaveAttribute("href", "/123/home");
  expect(links[2]).toHaveAttribute("href", "/123/our-story");
});

test("When landing on the homepage ScheduleIcon classname should be inactive", () => {
  customRender(<Navbar eventId="123" />);
  const links = screen.getAllByRole("link");
  const eventSchedule = links[0];
  expect(eventSchedule).toBeInTheDocument();
  expect(eventSchedule).toHaveAttribute(
    "class",
    "navbar__nav-link navbar__nav-link--inactive"
  );
});

test("When you click on the AboutIcon the classname changes to active", () => {
  customRender(<Navbar eventId="123/home" />);
  const links = screen.getAllByRole("link");
  const aboutPage = links[2];
  expect(aboutPage).toBeInTheDocument();
  userEvent.click(aboutPage);
  expect(aboutPage).toHaveAttribute(
    "class",
    "navbar__nav-link navbar__nav-link--active"
  );
});

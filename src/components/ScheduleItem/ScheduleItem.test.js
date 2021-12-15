import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScheduleItem from "./ScheduleItem"

it("should render the button to the form", () => {
    render(<ScheduleItem />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

it("showText should not render to the form on loan", () => {
  render(<ScheduleItem />);
  const showtext = screen.queryByText("lorem ipsum whatever");
  expect(showtext).not.toBeInTheDocument();
})

it("should change the picture on click of the button", () => {
  render(<ScheduleItem />); 
  const button = screen.getByRole("button");
  userEvent.click(button)
  expect(button).toHaveAttribute("src", "chevron-up.png");
})





import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils"
import userEvent from "@testing-library/user-event";
import ScheduleItem from "./ScheduleItem"

test("Renders App component with default page", () => {
  const { container } = customRender(<ScheduleItem />);
  expect(container).toMatchSnapshot();
});

it("should render the button to the form", () => {
    customRender(<ScheduleItem />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

it("showText should not render to the form on loan", () => {
  customRender(<ScheduleItem />);
  const showtext = screen.queryByText("lorem ipsum whatever");
  expect(showtext).not.toBeInTheDocument();
})

it("should change the picture on click of the button", () => {
  customRender(<ScheduleItem />); 
  const button = screen.getByRole("button");
  userEvent.click(button)
  expect(button).toHaveAttribute("src", "chevron-up.png");
})







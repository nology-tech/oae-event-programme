import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils"
import userEvent from "@testing-library/user-event";
import ScheduleItem from "./ScheduleItem"

test("Renders App component with default page", () => {
  const { container } = customRender(<ScheduleItem />);
  expect(container).toMatchSnapshot();
});

it("description should not render on load", () => {
  customRender(<ScheduleItem header="header" subHeader="subheader" description="lorem ipsum whatever"/>);
  const description = screen.queryByText("lorem ipsum whatever");
  expect(description).not.toBeInTheDocument();
})
it("header should render and description should render on button click", () => {
  customRender(<ScheduleItem header="header" subHeader="subheader" description="lorem ipsum whatever"/>);
  const header = screen.queryByText("header");
  expect(header).toBeInTheDocument()
  const button = screen.getByRole("button");
  userEvent.click(button)
  const description = screen.queryAllByText("lorem ipsum whatever")  
  expect(description[0]).toBeVisible()
})
it("should render the buuton and change the picture on click of the button", () => {
  customRender(<ScheduleItem header="header" subHeader="subheader" description="lorem ipsum whatever"/>); 
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("src", "chevron-down.png");
  userEvent.click(button)
  expect(button).toHaveAttribute("src", "chevron-up.png");
})
it("should not render the button when there is no description", () => { 
  customRender(<ScheduleItem header="header" subHeader="subheader" />);
  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("src", "");
})




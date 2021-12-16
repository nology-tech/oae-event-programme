import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import ScheduleItem from "./ScheduleItem";

test("Renders App component with default page", () => {
  const { container } = customRender(<ScheduleItem  header="header"
  subHeader="subheader"
  description="lorem ipsum" />);
  expect(container).toMatchSnapshot();
});

it("description should not render on load", () => {
  customRender(
    <ScheduleItem
      header="header"
      subHeader="subheader"
      description="lorem ipsum"
    />
  );
  const description = screen.queryByText("lorem ipsum");
  expect(description).not.toBeInTheDocument();
});
it("header should render and description should render on button click", () => {
  customRender(
    <ScheduleItem
      header="header"
      subHeader="subheader"
      description="lorem ipsum"
    />
  );
  const header = screen.queryByText("header");
  expect(header).toBeInTheDocument();
  const button = screen.getByRole("button");
  userEvent.click(button);
  const description = screen.queryAllByText("lorem ipsum");
  expect(description[0]).toBeVisible();
});
it("should render the button and change the picture on click of the button", () => {
  customRender(
    <ScheduleItem
      header="header"
      subHeader="subheader"
      description="lorem ipsum"
    />
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("src", "chevron-down.png");
  userEvent.click(button);
  expect(button).toHaveAttribute("src", "chevron-up.png");
});

it("the image should not appear in the document when there is no {description} prop", () => {
  customRender(<ScheduleItem header="header" subHeader="subheader" />);
  const button = screen.getByRole("button");
  expect(button).not.toHaveAttribute("src", "lorem ipsum");
});

import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Description from "./Description";

test("Renders description component", () => {
  const { container } = customRender(
    <Description text="If this is your first Bach" />
  );
  expect(container).toMatchSnapshot();
});

test("If no alt text button shouldn't render", () => {
  customRender(<Description text="If this is your first Bach" />);
  const button = screen.queryByRole("button");
  expect(button).not.toBeInTheDocument();
});

test("If there is an alternate description buttons should render", () => {
  customRender(
    <Description
      text="If this is your first Bach"
      altText="alternate description"
    />
  );
  const button = screen.getByText("Alternate").closest("button");
  expect(button).toBeInTheDocument();
});

test("When alternate button is pressed alternate description renders", () => {
  customRender(
    <Description
      text="If this is your first Bach"
      altText="alternate description"
    />
  );
  const button = screen.getByText("Alternate");
  fireEvent.click(button);
  const altText = screen.getByText("alternate description");

  expect(altText).toBeInTheDocument();
});

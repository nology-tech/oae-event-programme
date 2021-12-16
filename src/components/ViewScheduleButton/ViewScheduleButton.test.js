import { screen } from "@testing-library/react";
import ViewScheduleButton from "./ViewScheduleButton";
import { customRender } from "../../utils/testUtils";

it("should render the button", () => {
  customRender(<ViewScheduleButton />);
  const button = screen.getByRole("link");

  expect(button).toMatchSnapshot();
});

import { render, screen } from "@testing-library/react";
import ViewScheduleButton from "./ViewScheduleButton";

it("should render the button", () => {
  custom(<ViewScheduleButton />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import ViewScheduleButton from "./ViewScheduleButton";

it ("it should render the button", ()=> {
  render(<ViewScheduleButton />);
  const button  = screen.getByRole("button");

  expect(button).toBeInTheDocument();
})



// it ("it should send the user to the event schedule", ()=> {
//   render(<ViewScheduleButton />);
//   const link = screen.getByRole("Link");

//   expect(link).toBe();
// })
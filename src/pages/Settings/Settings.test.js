import { customRender } from "../../utils/testUtils";
import Settings from "./Settings";
import { screen } from "@testing-library/react";
import { getMockEventById } from "../../assets/data/data";

const mockEvent = getMockEventById("6bb8ffe8-6e5e-4abc-be7f-b05b749849cf");
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [mockEvent, jest.fn()],
}));

test("renders settings component", () => {
  const { container } = customRender(<Settings />);
  expect(container).toMatchSnapshot();
});

test("renders settings component", () => {
  customRender(<Settings />);
  const inputElement = screen.getByRole("checkbox");
  expect(inputElement).toBeInTheDocument();
});

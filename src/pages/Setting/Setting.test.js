import { customRender } from "../../utils/testUtils";
import Setting from "./Setting";
import { screen } from "@testing-library/react";
import { getMockEventById } from "../../assets/data/data";

const mockEvent = getMockEventById("6bb8ffe8-6e5e-4abc-be7f-b05b749849cf");
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [mockEvent, jest.fn()],
}));

test("renders setting component", () => {
  const { container } = customRender(<Setting />);
  expect(container).toMatchSnapshot();
});

test("renders setting component", () => {
  customRender(<Setting />);
  const inputElement = screen.getByRole("checkbox");
  expect(inputElement).toBeInTheDocument();
});

import { customRender } from "../../utils/testUtils";
import ErrorPage from "./ErrorPage";
import { screen } from "@testing-library/react";

it("should render the error page", () => {
  const { container } = customRender(<ErrorPage />);
  expect(container).toMatchSnapshot();
});

it("button should direct to href link", () => {
  customRender(<ErrorPage />);
  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "//oae.co.uk/");
});

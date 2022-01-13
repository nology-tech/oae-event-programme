import { customRender } from "../../utils/testUtils";
import { screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

it("should render the loading spinner", () => {
  customRender(<LoadingSpinner />);
  const loading = screen.getByTestId("loading");

  expect(loading).toMatchSnapshot();
});

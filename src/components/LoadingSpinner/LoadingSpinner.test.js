import { customRender } from "../../utils/testUtils";
import { LoadingSpinner } from "./LoadingSpinner";
it("should render the loading spinner", () => {
  customRender(<LoadingSpinner />);
  const loading = screen.getByTestId("paragraph");
  expect(loading).toMatchSnapshot();
});

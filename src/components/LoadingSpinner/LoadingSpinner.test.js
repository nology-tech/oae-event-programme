import { customRender } from "../../utils/testUtils";
import LoadingSpinner from "./LoadingSpinner";

it("should render the loading spinner", () => {
  const { container } = customRender(<LoadingSpinner />);

  expect(container).toMatchSnapshot();
});

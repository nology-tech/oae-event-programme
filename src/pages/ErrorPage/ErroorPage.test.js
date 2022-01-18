import { customRender } from "../../utils/testUtils";
import ErrorPage from "./ErrorPage";

it("should render the error page", () => {
  const { container } = customRender(<ErrorPage />);

  expect(container).toMatchSnapshot();
});

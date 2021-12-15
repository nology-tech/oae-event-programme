import Photo from "./Photo";
import { customRender } from "../../utils/testUtils";

test("Renders App component", () => {
  const { container } = customRender(<Photo />);
  expect(container).toMatchSnapshot();
});
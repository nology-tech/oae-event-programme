import { customRender } from "../../utils/testUtils";
import About from "./About";

test("Renders photo component in the About page", () => {
  const { container } = customRender(<About />);
  expect(container).toMatchSnapshot();
});

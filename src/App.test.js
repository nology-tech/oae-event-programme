import App from "./App";
import { customRender } from "./utils/testUtils";

test("Renders App component with default page", () => {
  const { container } = customRender(<App />);
  expect(container).toMatchSnapshot();
});



import About from "./pages/About/About";
import App from "./App";
import { customRender } from "./utils/testUtils";

// test("Renders App component with default page", () => {
//   const { container } = customRender(<App />);
//   expect(container).toMatchSnapshot();
// });

test("Renders photo component in the About page", () => {
  const { container } = customRender(<About />);
  expect(container).toMatchSnapshot();
});

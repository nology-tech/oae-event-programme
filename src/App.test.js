import { render } from "@testing-library/react";
//import App from "./App";
import About from "./pages/About/About"

// test("Renders App component", () => {
//   const { container } = render(<App />);
//   expect(container).toMatchSnapshot();
// });

test("Renders About component, photo and description should appear", () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});

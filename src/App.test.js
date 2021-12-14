import { render } from "@testing-library/react";
import App from "./App";

test("Renders App component", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

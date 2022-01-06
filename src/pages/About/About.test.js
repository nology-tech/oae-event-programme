import { customRender } from "../../utils/testUtils";
import About from "./About";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    eventId: "6bb8ffe8-6e5e-4abc-be7f-b05b749849cf",
  }),
}));

test("Renders photo component in the About page", () => {
  const { container } = customRender(<About />);
  expect(container).toMatchSnapshot();
});

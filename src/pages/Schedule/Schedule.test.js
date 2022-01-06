import { customRender } from "../../utils/testUtils";
import Schedule from "./Schedule";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    eventId: "6bb8ffe8-6e5e-4abc-be7f-b05b749849cf",
  }),
}));

test("Test", () => {
  const { container } = customRender(<Schedule />);
  expect(container).toMatchSnapshot();
});

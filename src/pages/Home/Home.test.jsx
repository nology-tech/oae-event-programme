import { customRender } from "../../utils/testUtils";
import Home from "./Home";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ eventId: 1234 }),
  useRouteMatch: () => ({ url: "/oae-event-programme/1234" }),
}));

test("Test", () => {
  const { container } = customRender(<Home />);
  expect(container).toMatchSnapshot();
});

import { customRender } from "../../utils/testUtils";
import Home from "./Home";
import { getMockEventById } from "../../assets/data/data";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    eventId: "6bb8ffe8-6e5e-4abc-be7f-b05b749849cf",
  }),
}));

const mockEvent = getMockEventById("6bb8ffe8-6e5e-4abc-be7f-b05b749849cf");

jest.mock("React", () => ({
  ...jest.requireActual("React"),
  useState: () => [mockEvent, jest.fn()],
}));

test("Test", () => {
  const { container } = customRender(<Home />);
  expect(container).toMatchSnapshot();
});
